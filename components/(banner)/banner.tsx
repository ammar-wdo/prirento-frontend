import Image from "next/image";
import React from "react";
import BannerImage from "./banner-image";
import MainHeader from "../(header)/main-header";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="bg-main md:pb-32 pb-56 h-[500px] relative">
      <Image src={'/banner-image.png'} fill alt='banner-image' className="object-cover" />
         <MainHeader transparent={true} />
         <div className="container">  <h1 className="capitalize text-white  text-left font-semibold pt-2 md:pt-12 text-2xl md:text-3xl lg:text-[40px] relative xl:mt-44 mt-20">
      Find & compare luxury cars <br/>In one click.
     
      </h1></div>
    
   
    </div>
  );
};

export default Banner;
