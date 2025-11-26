import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAllMovies } from '../store/moviesSlice';
import { TRAKT_CLIENT_ID } from '../utils/trakt';

const HEADERS = {
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': TRAKT_CLIENT_ID,
};

// Helper to fetch a valid endpoint
const fetchMovies = async (endpoint) => {
    const res = await fetch(`https://api.trakt.tv/movies/${endpoint}`, { headers: HEADERS });
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    const data = await res.json();
    return data.map(movie => ({ ...movie, category: endpoint }));
};

export const useFetchAllMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAll = async () => {
            try {
                const endpoints = ['trending', 'popular', 'anticipated', 'boxoffice'];
                const promises = endpoints.map(fetchMovies);

                const results = await Promise.all(promises);
                let combined = results.flat();

                const today = new Date().toISOString().split('T')[0];
                const nowPlaying = combined
                    .filter(movie => movie.released && movie.released <= today)
                    .map(movie => ({ ...movie, category: 'now_playing' }));

                combined = [...combined, ...nowPlaying];

                dispatch(addAllMovies(combined));
            } catch (err) {
                console.error(err);
            }
        };

        fetchAll();
    }, [dispatch]);
};
