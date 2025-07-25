import type { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type MainButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const MainButton = ({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}: MainButtonProps) => {
  const baseClasses =
    "font-bold text-2xl px-6 py-3 w-48 rounded-full cursor-pointer min-w-[160px]";
  const variants = {
    primary: "bg-white text-black",
    secondary: "bg-[#08198b] text-white",
  };

  return (
    <button
      className={clsx(baseClasses, variants[variant], className, {
        "flex items-center justify-center gap-2": icon,
      })}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};

export default MainButton;
