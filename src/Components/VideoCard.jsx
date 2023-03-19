import React from "react";

function VideoCard({ info }) {
  const { statistics, snippet } = info;
  const { channelTitle, thumbnails, title } = snippet;
  console.log(info);
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnails"
        src={`${thumbnails?.medium.url}`}
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
}

export default VideoCard;
