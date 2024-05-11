import Image from "next/image";
import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import profile from "@/public/images/dark-logo.svg";
import Tab from "../left/tab";
import { TiHome } from "react-icons/ti";
import { PiStudent } from "react-icons/pi";
import { FaFolderPlus, FaRegFileCode } from "react-icons/fa6";
import { GiFeather } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";
import { RiLineHeight } from "react-icons/ri";
import { SiCodeblocks } from "react-icons/si";
import { context } from "@/pages/_app";

function Sidebar() {
  let { isSidebarOpen, setIsSidebarOpen } = useContext(context);

  function closeSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div
        className={`sidebar-bg ${
          isSidebarOpen ? "sidebar-bg-open" : "sidebar-bg-close"
        }`}
      />
      <div
        className={`sidebar ${
          isSidebarOpen ? "sidebar-open" : "sidebar-close"
        }`}
      >
        <div className="closeBtn" onClick={closeSidebar}>
          <IoMdClose />
        </div>
        <Image className="mt-1" src={profile} alt="#s" />
        <div className="sidebar-icons">
          <div className="sidebar-tabs">
            <Tab class="active-tab-icon" icon={<TiHome />} title="خانه" />
            <Tab icon={<PiStudent />} class="tab-icon" title="درباره ما" />
            <Tab icon={<RiLineHeight />} class="tab-icon" title="خدمات" />
            <Tab icon={<FaFolderPlus />} class="tab-icon" title="نمونه کار" />
            <Tab icon={<SiCodeblocks />} class="tab-icon" title="تحصیلات" />
            <Tab icon={<FaRegFileCode />} class="tab-icon" title="قیمت گذاری" />
            <Tab icon={<GiFeather />} class="tab-icon" title="بلاگ" />
            <Tab icon={<IoChatbubblesSharp />} class="tab-icon" title="تماس" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
