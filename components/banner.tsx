import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="bg-main md:pb-32 pb-56">
      <p className="capitalize text-white  text-center font-semibold pt-2 md:pt-12 text-2xl md:text-3xl lg:text-5xl">
        find, book, and rental car
        <br /> in <span className="text-secondaryGold">easy</span> steps.
      </p>
      <div className="mt-2 sm:mt-4 mx-auto w-full aspect-[30.1/11] relative max-w-[900px]">
        <Image src={"/banner.png"} fill alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
