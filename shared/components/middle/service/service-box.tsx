import React from "react";
import {
  FcBullish,
  FcBarChart,
  FcAndroidOs,
  FcTreeStructure,
} from "react-icons/fc";

function ServiceBox() {
  return (
    <>
      <div className="service">
        <div className="service-box">
          <FcTreeStructure />
          <h3>استراتژی برند و جهت هنری</h3>
          <ul>
            <li>
              <div className="border-right"></div>
              طراحی UI UX
            </li>
            <li>
              <div className="border-right"></div>
              ریسرچ
            </li>
            <li>
              <div className="border-right"></div>
              اپلیکشن و سایت
            </li>
          </ul>
        </div>
        <div className="service-box">
          <FcAndroidOs />
          <h3>استفاده از برنامه های اندرویدی</h3>
          <ul>
            <li>
              <div className="border-right"></div>
              UI UX Design
            </li>
            <li>
              <div className="border-right"></div>
              Research
            </li>
            <li>
              <div className="border-right"></div>
              Application And Website
            </li>
          </ul>
        </div>
        <div className="service-box">
          <FcBarChart />
          <h3>توسعه جریان وب</h3>
          <ul>
            <li>
              <div className="border-right"></div>
              طراحی UI UX
            </li>
            <li>
              <div className="border-right"></div>
              ریسرچ
            </li>
            <li>
              <div className="border-right"></div>
              اپلیکشن و سایت
            </li>
          </ul>
        </div>
        <div className="service-box">
          <FcBullish />
          <h3>طراحی اپلیکیشن و سایت</h3>
          <ul>
            <li>
              <div className="border-right"></div>
              UI UX Design
            </li>
            <li>
              <div className="border-right"></div>
              Research
            </li>
            <li>
              <div className="border-right"></div>
              Application And Website
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ServiceBox;
