import React from "react";
import celebrationVideo from "../assets/celebration.mp4"; // Adjust the path as needed

const VideoComponent = () => {
  return (
    <div className="flex w-full">
      <video
        controls
        autoPlay
        loop
        muted
        className="w-full h-auto rounded-full shadow-md"
      >
        <source src={celebrationVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
