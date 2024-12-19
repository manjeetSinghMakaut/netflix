import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.TrailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1&vq=hd1080"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; , picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
