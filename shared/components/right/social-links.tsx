import Image from "next/image";
import React from "react";

function SocialLinks(props: any) {
  return (
    <div className="social-link hover:bg-[#56B887]  transition-all duration-500 hover:text-white">
      <Image
        src={props.img}
        alt="#"
        width={18}
        height={18}
        className="img-social"
      />
    </div>
  );
}

export default SocialLinks;
