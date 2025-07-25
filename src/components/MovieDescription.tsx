import { useEffect, useState, useRef } from "react";
import data from "../data/data.json";
import getImageURL from "../utils/image-util.js";
import formatDuration from "../utils/time-util.js";
import { Play } from "lucide-react";

const MovieDescription = () => {
  const [movie, setMovie] = useState(data.Featured);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleUpdate = () => {
      const storedId = sessionStorage.getItem("selectedMovie");
      if (storedId) {
        const foundMovie = data.TendingNow.find((item) => item.Id === storedId);
        if (foundMovie) {
          setMovie(foundMovie);
          setShowVideo(false);

          if (timerRef.current) clearTimeout(timerRef.current);

          timerRef.current = setTimeout(() => {
            setShowVideo(true);
          }, 2000);
        } else {
          setMovie(data.Featured);
          setShowVideo(false);
        }
      } else {
        setMovie(data.Featured);
        setShowVideo(false);
      }
    };

    window.addEventListener("movieSelected", handleUpdate);
    handleUpdate();

    return () => {
      window.removeEventListener("movieSelected", handleUpdate);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current
        .play()
        .catch((e) => {
          console.warn("Video play was prevented:", e);
        });
    }
  }, [showVideo]);
  useEffect(() => {
    if (movie.VideoUrl) {
      console.log("Playing video:", movie.VideoUrl);
    }
  }, [movie]);

  return (
    <section className="relative h-6/7 w-full flex flex-col justify-center items-start pl-1 sm:pl-44 overflow-hidden">
      {!showVideo ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getImageURL(movie.BackgroundImage)})` }}
        />
      ) : (
        <video
          key={movie.Id} // Force remount on movie change
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

      <div className="relative flex flex-col p-2 gap-3 w-4/10 text-white min-w-[350px]">
        <h6 className="text-xl uppercase font-bold tracking-widest leading-tight text-[#858688]">
          {movie.Category}
        </h6>
        <img src={getImageURL(movie.TitleImage)} alt="TitleImage" />
        <div className="flex gap-2">
          <p className="text-2xl font-medium">{movie.ReleaseYear}</p>
          <p className="text-2xl font-medium">{movie.MpaRating}</p>
          <p className="text-2xl font-medium">{formatDuration(movie.Duration)}</p>
        </div>
        <p className="text-2xl font-medium">{movie.Description}</p>
        <div className="flex gap-3 mt-5">
          <button className="bg-white text-black font-bold text-2xl px-6 py-3 w-48 rounded-full cursor-pointer flex items-center justify-center gap-2 min-w-[160px]">
            <Play className="w-5 h-5 text-black fill-black" />
            Play
          </button>
          <button className="bg-[#08198b] text-white font-bold text-2xl px-6 py-3 w-48 rounded-full cursor-pointer min-w-[160px]">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDescription;
