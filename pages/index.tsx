import Left from "@/shared/components/left/left";
import Contact from "@/shared/components/middle/home/contact";
import Middle from "@/shared/components/middle/middle";
import Right from "@/shared/components/right/right";
import Sidebar from "@/shared/components/sidebar/sidebar";
import { Inter } from "next/font/google";
import code from "../public/images/code-dark.png";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="main-container" dir="rtl">
        <Right />
        <Middle
          title="سلام,من اینجام :)"
          title1="انجام پروژه های,"
          greenWord1="حرفه ای "
          title2="و نرم افزاری با بهترین"
          greenWord2="کیفیت"
          component1={<Contact />}
          component2={<Image src={code} alt="#code" className="mt-16" />}
        />
        <Left />
        <Sidebar />
      </main>
    </>
  );
}
