import { context } from "@/pages/_app";
import React, { useContext } from "react";
import { LuText } from "react-icons/lu";

function Header() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(context);

  function sideBarState() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="left-header" onClick={sideBarState}>
      <LuText className="icon" />
    </div>
  );
}

export default Header;
