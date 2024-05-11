import React from "react";
import Header from "./header";
import Tab from "./tab";
import { TiHome } from "react-icons/ti";
import { PiStudent } from "react-icons/pi";
import { RiLineHeight } from "react-icons/ri";
import { FaFolderPlus } from "react-icons/fa6";
import { SiCodeblocks } from "react-icons/si";
import { FaRegFileCode } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";

function Left() {
  return (
    <>
      <div className="left">
        <Header />
        <div className="left-tab">
          <Tab icon={<TiHome className="active-tab-icon" />} url="/" />
          <Tab icon={<PiStudent className="tab-icon" />} url="aboutme" />
          <Tab icon={<RiLineHeight className="tab-icon" />} url="service" />
          <Tab icon={<FaFolderPlus className="tab-icon" />} url="aboutme" />
          <Tab icon={<SiCodeblocks className="tab-icon" />} url="aboutme" />
          <Tab icon={<FaRegFileCode className="tab-icon" />} url="aboutme" />
          <Tab icon={<GiFeather className="tab-icon" />} url="aboutme" />
          <Tab
            icon={<IoChatbubblesSharp className="tab-icon" />}
            url="aboutme"
          />
        </div>
      </div>
    </>
  );
}

export default Left;
