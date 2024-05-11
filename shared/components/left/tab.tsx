import Link from "next/link";
import React from "react";

function Tab(props: any) {
  return (
    <>
      <Link href={props.url ? props.url : ""}>
        <div className={props.class}>
          {props.icon} <span>{props.title}</span>
          <div className="tab-icon-animeated" />
        </div>
      </Link>
    </>
  );
}

export default Tab;
