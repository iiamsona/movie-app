import data from "../data/data.json";
import getImageURL from "../utils/image-util.js";
import { useMemo } from "react";

const TrendingNow = () => {

  const trendingItems = useMemo(() => {
    const sorted = [...data.TendingNow]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 50);
    return sorted;
  }, []);

  const getMovie = (item: object) => {
    sessionStorage.clear();
    sessionStorage.setItem("selectedMovie", JSON.stringify(item));
    window.dispatchEvent(new Event("movieSelected"));
  };

  return (
    <section className="absolute top-145 left-0 z-10 w-full flex flex-col justify-center gap-4 pt-10 pl-36">
      <p className="text-2xl px-2">Trending Now</p>

      <div className="hide-scrollbar overflow-x-auto">
        <div className="flex gap-4 w-max">
          {trendingItems.map((item) => (
            <img
              key={item.Id}
              src={getImageURL(item.CoverImage)}
              alt={item.Title}
              className="w-40 h-60 object-cover flex-shrink-0 cursor-pointer"
              onClick={() => getMovie(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
