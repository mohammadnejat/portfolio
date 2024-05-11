import React from "react";
import { FaArrowUp } from "react-icons/fa6";
function Footer() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="footer">
      <div className="rightSideGreen animate-bounce" />
      <strong>
        کپی رایت © 1403 <span>شارپ کد</span> تمامی حقوق محفوظ است.
      </strong>
      <span className="top" onClick={scrollTop}>
        <FaArrowUp className="animate-bounce w-8 h-8 cursor-pointer" />
      </span>
    </div>
  );
}

export default Footer;
