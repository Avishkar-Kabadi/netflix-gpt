import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTItle";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;
  const i = Math.floor(Math.random() * 10) + 1;
  const mainMovie = movies[i];
  const movieData = mainMovie.movie;
  const { title, trailer, overview } = movieData;
  const logo = movieData.images?.logo?.[0];
  const poster = movieData.images?.poster?.[0];

  return (
    <div className="relative">
      <VideoTitle title={title} logo={logo} overview={overview} />
      <VideoBackGround trailer={trailer} poster={poster} />
    </div>
  );
}
