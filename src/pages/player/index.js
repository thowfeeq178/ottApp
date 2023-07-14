import React, { useEffect, useRef } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import VideoPlayback from "./shakaplayer";
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
  // console.log("playbackData", playbackData);
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
  const onkeydown = (e) => {
    console.log("onkeydown", e);
    e?.stopPropagation?.();
    if (e && (e?.keyCode === 8 || e?.keyCode === 10009)) {
      window.history.back();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onkeydown);
    return () => {
      document.removeEventListener("keydown", onkeydown);
    };
  }, []);

  return (
    <div className="videoPlayer">
      {/* <VideoJS
        options={videoJsOptions}
        onReady={handlePlayerReady}
        className="video"
      /> */}
      {/* <video
        className="video"
        src={playbackData.file}
        // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        // type={playbackData.type}
        controls
        autoplay
        height="100%"
        width="100%"
      ></video> */}
      <VideoPlayback url={playbackData.file} />
    </div>
  );
};

export default Player;
