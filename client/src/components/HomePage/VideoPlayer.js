import * as React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactPlayer
        playing={true}
        loop={true}
        url="https://vimeo.com/722663800"
      />
    </div>
  );
}

export default VideoPlayer;
