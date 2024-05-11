import React from "react";
import Top from "./top";
import { TiHome } from "react-icons/ti";
import TextCircleAnimation from "./text-circle-animation";
import Title from "./title";
import Footer from "../footer/footer";

function Middle(props: any) {
  return (
    <>
      <div className="middle">
        <Top />
        <div className="middle-section">
          <div className="section-header">
            <div className="mt-12 flex">
              <TiHome className="icon animate-pulse" />{" "}
              <span>{props.title}</span>
            </div>
            <div
              className="green-box animate-bounce"
              style={{ animationDuration: "2s" }}
            ></div>
            <div className="white-box animate-bounce"></div>
            <TextCircleAnimation />
          </div>
          <Title
            title1={props.title1}
            title2={props.title2}
            greenWord1={props.greenWord1}
            greenWord2={props.greenWord2}
            greenWord3={props.greenWord3}
          />
          {props.component1}
          {props.component2}
          {props.component3}
          {props.component4}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Middle;
