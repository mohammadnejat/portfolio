import React from "react";

function TextCircleAnimation() {
  return (
    <>
      <svg
        className="circleText animate-spin border rounded-full p-3"
        style={{ animationDuration: "10s" }}
        viewBox="0 0 500 500"
        data-duration="10"
      >
        <path
          id="textcircle"
          fill="#222525"
          stroke="grey"
          strokeWidth="10"
          data-duration="10"
          d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
        ></path>

        <text dy="-30">
          <textPath
            xlinkHref="#textcircle"
            style={{
              direction: "ltr",
            }}
          >
            خدمات طراحی وبسایت حرفه ای
          </textPath>
        </text>
      </svg>
    </>
  );
}

export default TextCircleAnimation;
