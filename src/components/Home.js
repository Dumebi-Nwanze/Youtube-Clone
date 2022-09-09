import React, { useState } from "react";
import "./Home.css";
import { categoryData } from "../sidebar.data";
import Video from "./Video";
import { useEffect } from "react";

function Home() {
  const [category, setCategory] = useState("All");
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(
      "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=25",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideoData(response.items.slice(1, 49));
      })

      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        id="homeContainer"
        className="homeContainer relative pt-[60px] pl-[90px]
      w-full h-full box-border min-h-screen bg-primaryColor 
      text-textMain "
      >
        <div
          id="categoryTabs"
          className="categoryContainer bg-secondaryColor flex py-3 px-5 overflow-x-scroll 
        relative"
        >
          {categoryData.map((tab) => (
            <h3
              key={tab}
              onClick={() => setCategory(tab)}
              className={`categoryTab  ${
                category === tab && "active"
              } m-0 font-normal text-[15px] py-1.5 px-3.5 rounded-2xl first-letter 
          mr-3  whitespace-nowrap bg-secondaryLight cursor-pointer hover:bg-hoverTextColor 
          active:bg-textMain:text-primaryColor`}
            >
              {tab}
            </h3>
          ))}
        </div>
        <div
          className="videoContainer grid justify-items-center sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:flex flex-wrap 
        p-5 gap-x-4"
        >
          {videoData.map((data) => (
            <Video
              key={data.id.videoId}
              video={data.snippet}
              videoId={data.id.videoId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
