import Search from "../assets/icons/search.png";
import Home from "../assets/icons/home.png";
import Video from "../assets/icons/video.png";
import Reel from "../assets/icons/reel.png";
import Mask from "../assets/icons/mask.png";
import History from "../assets/icons/history.png";

export interface MenuItem {
  image: string;
  label: string;
  selected?: boolean;
}

export const menuItems: MenuItem[] = [
  { image: Search, label: "Search" },
  { image: Home, label: "Home", selected: true },
  { image: Video, label: "TV shows" },
  { image: Reel, label: "Movies" },
  { image: Mask, label: "Genres" },
  { image: History, label: "Watch Later" },
];
