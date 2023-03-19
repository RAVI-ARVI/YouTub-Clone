import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utiles/constant";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    getYouTubeData();
  }, []);
  const getYouTubeData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideo(json.items);
  };
  return (
    <div>
      <VideoCard info={video[0]} />
    </div>
  );
}

export default VideoContainer;
