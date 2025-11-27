import useFetchMovies from "../hooks/useFetchMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import WatchTrailer from "./WatchTrailer";
import { useSelector } from "react-redux";
export default function Browse() {
  useFetchMovies("trending");
  const showTrailer = useSelector((store) => store.config?.showTrailer);

  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div className="min-h-screen ">
      <Header />
      {showTrailer && <WatchTrailer />}

      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      <div className=""></div>
    </div>
  );
}
