import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  const scrollbarStyles = {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  };

  return (
    <div className="mt-6 md:mt-10">
      <h1 className="text-xl md:text-3xl text-white mb-4 pt-2 font-bold">{title}</h1>

      <div
        className="flex overflow-x-scroll no-scrollbar"
        style={scrollbarStyles}
      >
        <div className="flex space-x-6">
          {movies.map((item) => {
            const movie = item?.movie || {};

            const rating =
              typeof movie.rating === "number"
                ? movie.rating.toFixed(1)
                : "N/A";

            return (
              <MovieCard
                key={movie?.ids?.trakt || Math.random()}
                title={movie?.title || "No Title"}
                released={movie?.released || "N/A"}
                poster={movie?.images?.poster?.[0] || ""}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
