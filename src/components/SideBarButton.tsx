type SideBarButtonProps = {
    image: string;
    alt: string;
    selected?: boolean;
  };
  
  const SideBarButton = ({ image, alt, selected }: SideBarButtonProps) => {
    return (
        <section
        className={`w-16 h-16 flex items-center justify-center rounded-4xl ${
          selected ? 'bg-[#232a3f]' : ''
        }`}
      >
        <img src={image} alt={alt} className="w-6" />
      </section>
    );
  };
  
  export default SideBarButton;
  