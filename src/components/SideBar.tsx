import SideBarButton from './SideBarButton.tsx'
import Search from "../assets/icons/search.png";
import Home from "../assets/icons/home.png";
import Video from "../assets/icons/video.png";
import Reel from "../assets/icons/reel.png";
import Mask from "../assets/icons/mask.png";
import History from "../assets/icons/history.png";

const SideBar = () => {
  return (
    <section className="fixed z-50 top-0 left-0 h-full w-36 hover:w-96 flex flex-col justify-center items-center hover:items-start hover:pl-2  sidebar_hover">
      <div className="flex flex-col gap-2">
        <SideBarButton image={Search} alt='Search' />
        <SideBarButton image={Home} alt='Home' selected />
        <SideBarButton image={Video} alt='Video' />
        <SideBarButton image={Reel} alt='Reel' />
        <SideBarButton image={Mask} alt='Mask' />
        <SideBarButton image={History} alt='History' />
      </div>
    </section>
  );
};

export default SideBar;
