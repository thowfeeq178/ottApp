import React, { useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
// import VideoPlayback from "./shakaplayer";
// This imports the functional component from the previous sample.
import VideoJS from "./videoJs";
import "./index.css";
// import HlsPlayer from "./hlsjsPlayer";

const Player = () => {
  const playerRef = useRef(null);
  const location = useLocation();
  // const navigate = useNavigate();
  const params = useParams(); // go back button is needed
  const data = location?.state?.data;

  const playbackData = data?.sources?.[0];
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: playbackData.file,
        type: playbackData.type,
      },
    ],
    html5: {
      hls: {
        overrideNative: true,
      },
    },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div className="videoPlayer">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default Player;
