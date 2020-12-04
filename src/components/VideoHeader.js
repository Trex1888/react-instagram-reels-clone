import React from "react";
import "../styles/VideoHeader.css";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosOutlinedIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default VideoHeader;
