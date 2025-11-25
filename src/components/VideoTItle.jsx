const VideoTitle = ({ title, logo, overview }) => {
  const movieLogo = logo ? `https://${logo}` : null;

  return (
    <div className="absolute top-0 left-0 w-full aspect-video pt-[15%] px-4 md:px-12 text-white bg-linear-to-r from-black via-black/50 to-transparent z-10">
      {movieLogo && (
        <img
          src={movieLogo}
          alt="Movie Logo"
          className="w-32 md:w-48 lg:w-64 mb-4 shadow-lg rounded-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/100x40/000/FFF?text=Movie+Logo";
          }}
        />
      )}

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg max-w-[90%] md:max-w-xl">
        {title}
      </h1>

      <p className="hidden md:block py-6 text-sm md:text-lg w-full md:w-3/4 lg:w-2/5 drop-shadow-md leading-relaxed">
        {overview}
      </p>

      <div className="flex mt-4 md:mt-2 space-x-3 ">
        <button className="flex items-center bg-white text-black font-bold py-2 px-4 md:py-3 md:px-8 rounded-lg text-sm md:text-xl transition duration-200 hover:bg-white/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.38 2.831-1.664L21.144 12l-13.813 7.01c-1.302.716-2.831-.237-2.831-1.664V5.653z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>

        <button className="flex items-center bg-gray-600/70 text-white font-semibold py-2 px-4 md:py-3 md:px-8 rounded-lg text-sm md:text-xl transition duration-200 hover:bg-gray-500/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.4-3.5h-2.25v2.25h2.25V8.5zM12 11.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
              clipRule="evenodd"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
