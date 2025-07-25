import MainMovie from "./MainMovie.tsx";
import TrendingNow from "./TrendingNow.tsx";

const MoviesScreen = () => {
  return (
    <section className="relative w-full h-screen overflow-y-auto hide-scrollbar">
      <MainMovie />
      <TrendingNow />
    </section>
  );
};


export default MoviesScreen;
