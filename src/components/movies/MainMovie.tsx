import getImageURL from "../../utils/image-util.ts";
import formatDuration from "../../utils/time-util.ts";
import { Play } from "lucide-react";
import useMainMovie from "../../hooks/useMainMovie";
import Button from "../ui/Button.tsx";

const MainMovie = () => {
  const { movie, showVideo, videoRef } = useMainMovie();

  return (
    <section className="relative w-full h-6/7 flex flex-col justify-center items-start pl-1 sm:pl-44 overflow-hidden">
      {!showVideo ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getImageURL(movie.BackgroundImage)})`,
          }}
        />
      ) : (
        <video
          key={movie.Id}
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={movie.VideoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      )}

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative w-2/5 flex flex-col p-2 gap-3 text-white min-w-[350px]">
        <h6 className="text-xl uppercase font-bold tracking-widest leading-tight text-[#858688]">
          {movie.Category}
        </h6>
        <img src={getImageURL(movie.TitleImage)} alt="TitleImage" />
        <div className="flex gap-2 text-2xl font-medium">
          <span>{movie.ReleaseYear}</span>
          <span>{movie.MpaRating}</span>
          <span>{formatDuration(movie.Duration)}</span>
        </div>
        <p className="text-2xl font-medium">{movie.Description}</p>
        <div className="flex gap-3 mt-5">
          <Button icon={<Play className="w-5 h-5 text-black fill-black" />}>
            Play
          </Button>
          <Button variant="secondary">More Info</Button>
        </div>
      </div>
    </section>
  );
};

export default MainMovie;
