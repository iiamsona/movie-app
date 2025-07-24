type SideBarButtonProps = {
    image: string;
    alt: string;
    selected?: boolean;
    hovered?: boolean;
  };
  
  const SideBarButton = ({ image, alt, selected, hovered }: SideBarButtonProps) => {
    return (
        <section
        className={`w-16 h-16 flex items-center justify-center rounded-4xl cursor-pointer ${
          selected ? 'bg-[#232a3f] font-semibold' : ''
        }
        ${hovered ? 'w-full h-16 rounded-xl px-auto justify-start pl-5' : 'w-16 h-16'}`}
      >
        <img src={image} alt={alt} className="w-6" />
        {hovered && (
        <p className="ml-4 text-white whitespace-nowrap font-md">
          {alt}
        </p>
      )}
      </section>
    );
  };
  
  export default SideBarButton;
  