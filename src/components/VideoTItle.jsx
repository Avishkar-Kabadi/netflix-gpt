const VideoTitle = ({ title, logo, overview }) => {
  const movieLogo = logo ? `https://${logo}` : null;

  return (
    <div
      className="
        absolute top-0 left-0 
        w-full h-full 
        flex flex-col justify-center 
        px-4 md:px-12 
        text-white 
        bg-gradient-to-r from-black via-black/60 to-transparent 
        z-10
      "
    >
      {/* Logo or Title */}
      {movieLogo ? (
        <img
          src={movieLogo}
          alt="Movie Logo"
          className="
            w-40 md:w-60 lg:w-80 
            mb-4 
            drop-shadow-xl 
            object-contain
          "
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/200x80/000/FFF?text=Logo";
          }}
        />
      ) : (
        <h1
          className="
            text-3xl md:text-5xl lg:text-6xl 
            font-extrabold 
            drop-shadow-xl 
            max-w-[90%] md:max-w-2xl
          "
        >
          {title}
        </h1>
      )}

      {/* Description */}
      <p
        className="
          hidden md:block 
          mt-4 mb-6 
          text-base md:text-lg 
          max-w-lg lg:max-w-2xl 
          leading-relaxed 
          drop-shadow-lg
        "
      >
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex mt-4 space-x-3">
        <button
          className="
            flex items-center 
            bg-white text-black 
            font-bold 
            py-2 px-4 
            md:py-3 md:px-8 
            rounded-lg 
            text-sm md:text-lg 
            hover:bg-white/80 
            transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.38 2.831-1.664L21.144 12l-13.813 7.01c-1.302.716-2.831-.237-2.831-1.664V5.653z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>

        <button
          className="
            flex items-center 
            bg-gray-600/70 
            text-white 
            font-semibold 
            py-2 px-4 
            md:py-3 md:px-8 
            rounded-lg 
            text-sm md:text-lg 
            hover:bg-gray-500/80 
            transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
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
