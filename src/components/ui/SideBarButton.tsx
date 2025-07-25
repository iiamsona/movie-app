import type { ReactNode } from "react";
import clsx from "clsx";

type SideBarButtonProps = {
  icon: string | ReactNode;
  label: string;
  selected?: boolean;
  hovered?: boolean;
  onClick?: () => void;
};

const SideBarButton = ({
  icon,
  label,
  selected = false,
  hovered = false,
  onClick,
}: SideBarButtonProps) => {
  const isIconString = typeof icon === "string";

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center cursor-pointer rounded-4xl transition-all duration-300 hover:bg-[#232a3f] hover:opacity-80",
        selected ? "bg-[#232a3f] font-semibold" : "",
        hovered
          ? "w-full h-16 rounded-xl justify-start pl-5"
          : "w-16 h-16 justify-center"
      )}
      aria-pressed={selected}
      aria-label={label}
    >
      {isIconString ? <img src={icon} alt={label} className="w-6" /> : icon}

      {hovered && (
        <span className="ml-4 text-white whitespace-nowrap font-medium">
          {label}
        </span>
      )}
    </button>
  );
};

export default SideBarButton;
