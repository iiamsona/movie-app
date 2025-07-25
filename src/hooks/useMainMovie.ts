import { useEffect, useRef, useState } from "react";
import data from "../data/data.json";

const useMainMovie = () => {
  const [movie, setMovie] = useState(data.Featured);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleUpdate = () => {
      const storedId = sessionStorage.getItem("selectedMovie");

      const foundMovie = data.TendingNow.find((item) => item.Id === storedId);
      const selectedMovie = foundMovie || data.Featured;

      setMovie(selectedMovie);
      setShowVideo(false);

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setShowVideo(true);
      }, 2000);
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
      videoRef.current.play().catch((e) => {
        console.warn("Video play was prevented:", e);
      });
    }
  }, [showVideo]);

  return {
    movie,
    showVideo,
    videoRef,
  };
};

export default useMainMovie;
