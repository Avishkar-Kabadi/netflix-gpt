import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // If no data, don't render
  if (!movies || movies.length === 0) return null;

  // Safe random index (within array length)
  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];

  // Movie structure safety check
  const movieData = mainMovie?.movie || {};

  const title = movieData.title || "Untitled";
  const trailer = movieData.trailer || null;
  const overview = movieData.overview || "No description available.";
  const logo = movieData.images?.logo?.[0] || null;
  const poster = movieData.images?.poster?.[0] || null;

  return (
    <div className="relative w-full h-auto">
      {/* Title overlay */}
      <VideoTitle title={title} logo={logo} overview={overview} />

      {/* Hero background video */}
      <VideoBackGround trailer={trailer} poster={poster} />
    </div>
  );
}
