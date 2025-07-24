import data from "../data/data.json";
import getImageURL from "../utils/image-util.js";
import formatDuration from "../utils/time-util.js";
import { Play } from "lucide-react";

const MovieDescription = () => {
  const featured = data.Featured;
  return (
    <section
      className="relative h-6/7 w-full flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat pl-36"
      style={{ backgroundImage: `url(${getImageURL(featured.CoverImage)})` }}
    >
      <div className="flex flex-col p-2 gap-3 w-4/10">
        <h6 className="text-xl text-[#858688] uppercase font-bold tracking-widest leading-tight">
          {featured.Category}
        </h6>
        <img
          src={getImageURL(featured.TitleImage)}
          alt="TitleImage"
        />
        <div className="flex gap-2">
          <p className="text-2xl font-medium">{featured.ReleaseYear}</p>
          <p className="text-2xl font-medium">{featured.MpaRating}</p>
          <p className="text-2xl font-medium">
            {formatDuration(featured.Duration)}
          </p>
        </div>
        <p className="text-2xl font-medium">{featured.Description}</p>
        <div className="flex gap-3 mt-5">
          <button className="bg-white text-black font-bold text-2xl px-6 py-3 w-48 rounded-full cursor-pointer flex items-center justify-center gap-2">
            <Play className="w-5 h-5 text-black fill-black" />
            Play
          </button>
          <button className="bg-[#08198b] text-white font-bold text-2xl px-6 py-3 w-48 rounded-full cursor-pointer">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDescription;
