import { useEffect, useRef } from "react";
import shaka from "shaka-player";

let player = null;

const VideoPlayback = ({ url }) => {
  const video = useRef(undefined);
  useEffect(() => {
    // Install built-in polyfills to patch browser incompatibilities.
    console.log("url", url);
    shaka.polyfill.installAll();
    initPlayer();
  }, []);

  const initPlayer = () => {
    player = new shaka.Player(video.current);

    player
      .load("https://cdn.jwplayer.com/manifests/bR6PIUlC.m3u8")
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
      <h2>Player</h2>
      <video ref={video} width="640" controls autoPlay />
    </div>
  );
};

export default VideoPlayback;
