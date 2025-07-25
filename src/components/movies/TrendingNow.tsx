import getImageURL from "../../utils/image-util.ts";
import useSelectMovie from "../../hooks/useSelectMovie";
import useTrendingMovies from "../../hooks/useTrendingMovies";

const TrendingNow = () => {
  const selectMovie = useSelectMovie();
  const trendingItems = useTrendingMovies();

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
              onClick={() => selectMovie(item.Id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
