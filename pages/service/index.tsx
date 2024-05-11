import Left from "@/shared/components/left/left";
import AboutMeRate from "@/shared/components/middle/aboutme/aboutme-rate";
import Middle from "@/shared/components/middle/middle";
import ServiceBox from "@/shared/components/middle/service/service-box";
import Right from "@/shared/components/right/right";
import Sidebar from "@/shared/components/sidebar/sidebar";
import React from "react";

function Index() {
  return (
    <main className="main-container" dir="rtl">
      <Right />
      <Middle
        title="خدمات ما"
        title1="بهترین خدمات"
        greenWord1="را از ما بگیرید"
        component1={<ServiceBox />}
      />
      <Left />
      <Sidebar />
    </main>
  );
}

export default Index;
