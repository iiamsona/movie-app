import { useState } from "react";
import SideBarButton from "./SideBarButton.tsx";
import Search from "../assets/icons/search.png";
import Home from "../assets/icons/home.png";
import Video from "../assets/icons/video.png";
import Reel from "../assets/icons/reel.png";
import Mask from "../assets/icons/mask.png";
import History from "../assets/icons/history.png";

const SideBar = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      className={`fixed z-50 top-0 left-0 h-full hidden w-36 hover:w-96 sm:flex  flex-col items-center hover:items-start hover:pl-2 bg-[#040404]  sidebar_hover transition-all duration-500 ease-in-out ${
        hovered ? "justify-between" : "justify-center"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`w-full flex flex-col gap-2 ${
          hovered ? "items-start pl-2 pr-16" : "items-center"
        }`}
      >
        {hovered && (
          <div className="flex items-center justify-center gap-3 pt-8 pl-2">
            <div className="w-12 h-12 bg-fuchsia-300 rounded-full"></div>
            <p className="font-semibold">Daniel</p>
          </div>
        )}
        <SideBarButton image={Search} alt="Search" hovered={hovered} />
        <SideBarButton image={Home} alt="Home" selected hovered={hovered} />
        <SideBarButton image={Video} alt="TV shows" hovered={hovered} />
        <SideBarButton image={Reel} alt="Movies" hovered={hovered} />
        <SideBarButton image={Mask} alt="Ganres" hovered={hovered} />
        <SideBarButton image={History} alt="Watch Later" hovered={hovered} />
      </div>
      {hovered && (
        <div className="w-full grid items-start pl-8 pb-8 gap-1 text-md font-semibold tracking-widest text-gray-400 uppercase">
          <p className="cursor-pointer">Langage</p>
          <p className="cursor-pointer">Get help</p>
          <p className="cursor-pointer">Exit</p>
        </div>
      )}
    </section>
  );
};

export default SideBar;
