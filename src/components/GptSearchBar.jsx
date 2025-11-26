import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GptSearchBar = () => {
  const ln = useSelector((store) => store.config?.lang);

  return (
    <div className="pt-[30%] sm:pt-[10%] flex justify-center relative ">
      <form
        className="bg-black bg-opacity-60 p-4 rounded-xl 
                       w-[90%] sm:w-3/4 md:w-1/2 
                       grid grid-cols-12 gap-3"
      >
        <input
          type="text"
          placeholder={lang[ln].gptSearchPlaceholder}
          className="col-span-9 p-3 rounded-lg 
                     bg-white text-black 
                     focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          className="col-span-3 
                     px-2 py-3 
                     bg-red-600 hover:bg-red-700 
                     text-white font-semibold text-sm 
                     rounded-lg shadow-md hover:shadow-lg 
                     transition-all duration-200"
        >
          {lang[ln].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
