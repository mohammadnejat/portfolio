import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";

function Contact() {
  return (
    <div className="contact">
      <div className="flex items-center gap-6">
        <IoMailUnread />
        M.nejaat01@gmail.com
      </div>
      <div className="flex items-center gap-6">
        <FaPhoneVolume />
        989055098468+
      </div>
    </div>
  );
}

export default Contact;
