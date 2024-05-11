import Image from "next/image";
import React, { lazy } from "react";
import { FaStar } from "react-icons/fa";
import aboutmeImage from "@/public/images/aboutme-image.png";
function AboutMeRate() {
  return (
    <>
      <div className="grid grid-cols-2 mt-16 gap-3 aboutme-rate">
        <div>
          با عشق به خلق تجربه‌های دیجیتال نو و کاربرپسند، توسعه دهنده‌ی فرانت-
          اندی با زمینه‌ای قوی در ساخت اپلیکیشن‌های وب interactives و Visual
          هستم.
        </div>
        <div>
          تجربه در frameworks فرنت- اند مثل React، Angular آگاهی از تکنیک‌های
          بهینه‌سازی عملکرد وب و بهترین Practices
        </div>
        <div className="rate">
          <div className="green-star">
            <FaStar />
          </div>
          <div className="title">
            <strong>5 ستاره</strong>
          </div>
        </div>
        {/* <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat
        ut nulla ipsa illo, laboriosam, sunt consectetur commodi quos provident
        corrupti repellendus nesciunt ea, aliquid magnam eos deserunt omnis
        velit?
      </div> */}
      </div>
      <div className="grid grid-cols-2 mt-16 gap-3 aboutme-info">
        <div>
          <strong>نام</strong>
          <small>سیدمحمد نجات</small>
        </div>
        <div>
          <strong>شرکت</strong>
          <small>کد شارپ</small>
        </div>
        <div>
          <strong>شماره</strong>
          <small>989055098468+</small>
        </div>
        <div>
          <strong>سابقه</strong>
          <small>3 سال</small>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-10">
        <div className="w-52 h-52 flex items-center justify-center border rounded-full hover:border-green-sun transition-all">
          <Image src={aboutmeImage} alt="aboutme" loading="lazy" />
        </div>
        <div className="w-52 h-52 flex items-center justify-center border rounded-full hover:border-green-sun transition-all">
          <Image src={aboutmeImage} alt="aboutme" loading="lazy" />
        </div>
        <div className="w-52 h-52 flex items-center justify-center border rounded-full hover:border-green-sun transition-all">
          <Image src={aboutmeImage} alt="aboutme" loading="lazy" />
        </div>
      </div>
    </>
  );
}

export default AboutMeRate;
