import React from "react";

function Title(props: any) {
  return (
    <h1 className="main-title">
      {props.title1}
      <span> {props.greenWord1}</span>
      {props.title2} <span>{props.greenWord2}</span>{" "}
      <span>{props.greenWord3}</span>
    </h1>
  );
}

export default Title;
