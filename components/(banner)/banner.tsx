import Image from "next/image";
import React from "react";
import BannerImage from "./banner-image";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="bg-main md:pb-32 pb-56">
      <p className="capitalize text-white  text-center font-semibold pt-2 md:pt-12 text-2xl md:text-3xl lg:text-5xl">
        find, book, and rental car
        <br /> in <span className="text-secondaryGold">easy</span> steps.
      </p>
    <BannerImage/>
    </div>
  );
};

export default Banner;
