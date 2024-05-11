import Image from "next/image";
import React from "react";

import profile from "../../../public/images/profile.jpg";
import dribbleAbslouteImg from "../../../public/images/dribble.svg";
import SocialLinks from "./social-links";

function Right() {
  return (
    <div className="right">
      <div className="profile-container">
        <Image src={profile} alt="#" className="profile" />
        <div className="dribble-img-div">
          <Image src={dribbleAbslouteImg} alt="#" className="dribble-img" />
        </div>
      </div>
      <div>
        <p className="text-[#fff]">سیدمحمد نجات</p>
        <p className="text-[#8B9F9F]">طراح و توسعه دهنده</p>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <button className="bg-[#56B887] text-[#fff] rounded-lg px-8 pt-4 pb-6 text-center">
          <p className=" font-semibold text-xl">استخدام من!</p>
        </button>
        <button className=" py-4 pb-5 w-36 border rounded-xl border-[#2A2E2E] hover:bg-[#56B887]  transition-all duration-500 hover:!text-[#fff] text-[#8B9F9F]">
          <p className=" font-medium text-lg">دانلود رزومه</p>
        </button>
      </div>

      <p className="text-[#8B9F9F]">
        متخصص در استراتژی ، بهبود بلوغ طراحی و سیستم های طراحی.
      </p>

      <div className="flex gap-4">
        <SocialLinks img="https://atiyehahmadi.ir/AXZ/axz_personal_portfolio_html_template/axz-portfolio-dark/assets/img/icons/twitter-x.svg" />
        <SocialLinks img="https://atiyehahmadi.ir/AXZ/axz_personal_portfolio_html_template/axz-portfolio-dark/assets/img/icons/facebook.svg" />
        <SocialLinks img="https://atiyehahmadi.ir/AXZ/axz_personal_portfolio_html_template/axz-portfolio-dark/assets/img/icons/linkedin.svg" />
        <SocialLinks img="https://atiyehahmadi.ir/AXZ/axz_personal_portfolio_html_template/axz-portfolio-dark/assets/img/icons/instagram.svg" />
      </div>
    </div>
  );
}

export default Right;
