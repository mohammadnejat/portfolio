import Left from "@/shared/components/left/left";
import AboutMeRate from "@/shared/components/middle/aboutme/aboutme-rate";
import Middle from "@/shared/components/middle/middle";
import Right from "@/shared/components/right/right";
import Sidebar from "@/shared/components/sidebar/sidebar";
import React from "react";

function AboutMe() {
  return (
    <main className="main-container" dir="rtl">
      <Right />
      <Middle
        title="درباره من"
        title1="بهترین فریلنسر را "
        greenWord1="استخدام"
        title2="کنید"
        component1={<AboutMeRate />}
      />
      <Left />
      <Sidebar />
    </main>
  );
}

export default AboutMe;
