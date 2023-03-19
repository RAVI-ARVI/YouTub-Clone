import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utiles/constant";
import VideoCard from "./VideoCard";

function VideoContainer() {
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    getYouTubeData();
  }, []);
  const getYouTubeData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideo(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=` + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
