import { useMemo } from "react";
import data from "../data/data.json";
import getImageURL from "../utils/image-util.ts";

const TrendingNow = () => {
  const lastClickedId = sessionStorage.getItem("selectedMovie");
  const trendingItems = useMemo(() => {
    const sortedDefault = [...data.TendingNow].sort(
      (a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
    );

    if (!lastClickedId) return sortedDefault;
    const lastClickedMovie = sortedDefault.find((m) => m.Id === lastClickedId);
    const others = sortedDefault.filter((m) => m.Id !== lastClickedId);

    return lastClickedMovie ? [lastClickedMovie, ...others] : sortedDefault;
  }, [lastClickedId]);

  const getMovie = (id: string) => {
    sessionStorage.setItem("selectedMovie", id);
    window.dispatchEvent(new Event("movieSelected"));
  };

  return (
    <section className="bottombar absolute top-145 left-0 z-10 w-full flex flex-col justify-center gap-4 pt-10 pl-1 sm:pl-36">
      <p className="text-2xl px-2 pl-1 sm:pl-8">Trending Now</p>

      <div className="hide-scrollbar overflow-x-auto">
        <div className="flex gap-4 w-max">
          {trendingItems.map((item) => (
            <img
              key={item.Id}
              src={getImageURL(item.CoverImage)}
              alt={item.Title}
              className="w-40 h-60 object-cover flex-shrink-0 cursor-pointer"
              onClick={() => getMovie(item.Id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
