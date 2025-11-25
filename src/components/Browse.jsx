import useFetchMovies from "../hooks/useFetchMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
export default function Browse() {
  useFetchMovies("trending");

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* MainContainer
            - VideoBackground
            - VideoTitle
            
          SecondaryContainer
            MovieList * n
              - Cards * n
      */}
      <div className=""></div>
    </div>
  );
}
