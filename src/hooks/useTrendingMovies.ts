import { useMemo } from "react";
import data from "../data/data.json";

const useTrendingMovies = () => {
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

  return trendingItems;
};

export default useTrendingMovies;
