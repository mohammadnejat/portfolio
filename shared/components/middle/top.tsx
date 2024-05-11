import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/dark-logo.svg";
import { IoSunny } from "react-icons/io5";
function Top() {
  return (
    <div className="header-container">
      <div className="header-body">
        <div className="menu-left">
          <div className="">
            <a href="#">
              <Image className="dark w-[50px] h-[50px]" src={Logo} alt="#" />
            </a>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-16">
              <li>
                <a className="home-link" href="#">
                  خانه
                </a>
              </li>
              <li>
                <a href="#" className="hire-link">
                  استخدام من!
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cm-functionality cm-right">
          <IoSunny className="sun" />
        </div>
      </div>
    </div>
  );
}

export default Top;
