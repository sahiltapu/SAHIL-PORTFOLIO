import React from "react";
import ReactPlayer from "react-player";
import LOGOVIDEO from "../../assets/LOGO_VDO.mp4";

const LogoVideo = () => {
  return <ReactPlayer url={LOGOVIDEO} playing={true} loop={true}/>;
};

export default LogoVideo;
