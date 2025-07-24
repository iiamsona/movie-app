import data from "../data/data.json";
import getImageURL from "../utils/image-util.js";
import { useMemo } from "react";

const TrendingNow = () => {
  const trendingItems = useMemo(() => {
    // Sort by createdAt descending and take first 50 items
    const sorted = [...data.TendingNow]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 50);
    return sorted;
  }, []);

  return (
    <section className="relative w-full flex flex-col justify-center gap-4">
      <p className="text-2xl mb-4 px-2">Trending Now</p>

      <div className="hide-scrollbar overflow-x-auto">
        <div className="flex gap-4 px-2 w-max">
          {trendingItems.map((item) => (
            <img
            key={item.Id}
            src={getImageURL(item.CoverImage)}
            alt={item.Title}
            className="w-40 h-60 object-cover rounded-lg flex-shrink-0"
          />
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
