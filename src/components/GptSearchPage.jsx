import BG from "../assets/Netflix-BG.jpg";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img className="h-full w-full object-cover" src={BG} alt="Background" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
