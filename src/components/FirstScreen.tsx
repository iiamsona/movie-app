import MovieDescription from "./MovieDescription.tsx";
import TrendingNow from "./TrendingNow.tsx";

const FirstScreen = () => {
  return (
    <section className="relative w-full h-screen overflow-y-auto hide-scrollbar">
      <MovieDescription />
      <TrendingNow />
    </section>
  );
};


export default FirstScreen;
