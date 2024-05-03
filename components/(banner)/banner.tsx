import Image from "next/image";
import React from "react";
import BannerImage from "./banner-image";
import MainHeader from "../(header)/main-header";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="bg-main md:pb-32 pb-56 h-[550px] relative">
      <Image priority={true} src={'/banner-image2.jpeg'} fill alt='banner-image' className="object-cover object-bottom hidden xl:block" />
      <Image priority={true} src={'/banner-mobile.jpg'} fill alt='banner-image' className="object-cover  xl:hidden object-center" />
         <MainHeader transparent={true} />
         <div className="container">  <h1 className="capitalize text-white  text-left font-semibold text-2xl md:text-3xl lg:text-[40px] w-fit relative  xl:mt-32 mt-8 sm:bg-main">
      Find & compare luxury cars
     
      </h1>
      <h2 className="capitalize text-white   text-left font-semibold text-2xl md:text-3xl lg:text-[40px] w-fit relative  mt-2 sm:bg-main">In one click.</h2>
      </div>
    
   
    </div>
  );
};

export default Banner;
