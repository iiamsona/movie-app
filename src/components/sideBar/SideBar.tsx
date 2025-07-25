import { useState } from "react";
import SideBarButton from "../ui/SideBarButton.tsx";
import { menuItems } from "../../data/menuItems";

const SideBar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className={`sidebar_hover fixed z-50 top-0 left-0 h-full w-36 flex-col items-center hidden sm:flex bg-[#040404] hover:w-96 hover:items-start hover:pl-2 transition-all duration-500 ease-in-out ${
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
        {menuItems.map(({ image, label, selected }) => (
          <SideBarButton
            key={label}
            image={image}
            string={label}
            hovered={hovered}
            selected={selected}
          />
        ))}
      </div>

      {hovered && (
        <div className="w-full grid grid-rows-3 gap-1 pl-8 pb-8 text-md font-semibold tracking-widest uppercase text-[#858688]">
          <p className="cursor-pointer">Langage</p>
          <p className="cursor-pointer">Get help</p>
          <p className="cursor-pointer">Exit</p>
        </div>
      )}
    </section>
  );
};

export default SideBar;
