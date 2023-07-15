import { useEffect, useRef } from "react";
import shaka from "shaka-player";
import muxjs from "mux.js";

let player = null;
window.muxjs = muxjs;

const VideoPlayback = ({ url }) => {
  // shaka.polyfill.installAll();
  const video = useRef(undefined);
  useEffect(() => {
    // Install built-in polyfills to patch browser incompatibilities.
    // console.log("url>>>>", url);
    shaka.polyfill.installAll();
    initPlayer();

    return () => {
      player.destroy();
    };
  }, []);

  const initPlayer = () => {
    player = new shaka.Player(video.current);
    player
      .load(url)
      .then(function () {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded! ");
      })
      .catch(onError);

    // Listen for error events.
    player.addEventListener("error", onErrorEvent);
  };

  const onErrorEvent = (event) => {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
  };

  const onError = (error) => {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  };

  return (
    <div>
      <video
        ref={video}
        width="100%"
        height="100%"
        controls
        autoPlay
        className="video"
      />
    </div>
  );
};

export default VideoPlayback;
