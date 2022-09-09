import React from "react";
import "./Video.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Video(props) {
  const goToVideo = (e) => {
    e.preventDefault();
    const videoLink = `https://www.youtube.com/watch?v=${props.videoId}`;
    window.location.href = videoLink;
  };
  return (
    <div>
      <div
        className="videoBox"
        onClick={(e) => {
          goToVideo(e);
        }}
      >
        <div className="thumbnailInfo relative w-full max-h-[200px]">
          <img
            src={props.video.thumbnails.high.url}
            alt="Thumbnail"
            className="overflow-hidden object-cover max-h-full h-[203px] w-[360px]"
          />
          <p
            className="absolute bottom-1.5 right-[3px] text-[12px] 
          py-[2px] px-2 bg-black m-0 rounded-[3px] font-medium"
          >
            12:06
          </p>
        </div>
        <div className="videoInfo flex mt-2.5">
          <img
            src={props.video.thumbnails.default.url}
            alt="Channel Logo"
            className="h-9 w-9 rounded-full "
          />
          <div className="ml-2 flex flex-col justify-between">
            <h2 className="m-0 text-[15px] leading-5">
              {props.video.title.substring(0, 69)}
            </h2>
            <h3
              className="text-textLightMain text-[13px] mt-2 mb-1 items-center 
            hover:text-textMain"
            >
              {props.video.channelTitle}
              <span className="ml-0.5">
                <CheckCircleIcon sx={{ fontSize: 18 }} />
              </span>
            </h3>
            <p className="text-[12px] text-textLightMain m-0 mb-4 font-medium">
              1.3M views . 15 hours ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
