import MovieDescription from "./MovieDescription.tsx";
import SideBar from "./SideBar.tsx";

const FirstScreen = () => {
  return (
    <section className="relative w-screen h-screen flex">
      <SideBar />
      <MovieDescription />
    </section>
  );
};

export default FirstScreen;
