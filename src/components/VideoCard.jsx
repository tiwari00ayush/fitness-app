import React, { useEffect, useState } from "react";
import { fetchData, videoOptions } from "../utils/fetchData";
import DummyLoading from "./DummyLoading";

const VideoCard = ({ name }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const videoUrl = `https://youtube-search-and-download.p.rapidapi.com/search?query=How%20to%20do%20${name}`;
      const videoData = await fetchData(videoUrl, videoOptions);
      console.log(videoData);
      setVideos(videoData.contents);
    };
    if (name !== undefined) getVideos();
  }, [name]);
  return (
    <div className="px-[5px] sm:px-[80px]">
      <h1 className="text-4xl my-4">
        Watch <span className="text-red-400">{name}</span> exercise videos
      </h1>
      <p className="text-[1rem] pb-2">Scroll →</p>
      <div className="flex items-stretch gap-10 justify-start">
        {name === undefined || videos.length === 0 ? (
          <DummyLoading />
        ) : (
          videos.slice(0, 3).map((video, index) => (
            <div className="w-[300px]" key={index}>
              <a
                href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              >
                <img
                  src={video.video.thumbnails[0].url}
                  alt="thumbnail"
                  className="w-[300px] h-[200px] object-cover rounded-lg"
                />
                <p className="w-[100%] text-center mt-2 text-[1.3rem]">
                  {video.video.title}
                </p>
                <p className="w-[100%] text-center  text-gray-500">
                  {video.video.channelName}
                </p>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoCard;
