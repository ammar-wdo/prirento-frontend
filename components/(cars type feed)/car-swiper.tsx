"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
type Props = {
  gallary: string[];
  index:string
};
const CarCardSwiperComponent = ({ gallary,index }: Props) => {
  return (
    <div className="relative group">
    <Swiper
      // Install Swiper modules
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={{
        nextEl: `.custom-swiper-button-next-${index}`,
        prevEl: `.custom-swiper-button-prev-${index}`,
      
      }}
    >
      {gallary.map((image) => (
        <SwiperSlide key={image}>
          <div className="w-full aspect-video relative">
            <Image fill src={image} alt="car image" className="object-cover" />
          </div>
        </SwiperSlide>
      ))}

      {/* Add more SwiperSlide components as needed */}
    </Swiper>
      <div className=" w-full absolute top-1/2 translate-y-3 opacity-0 transition group-hover:-translate-y-3  z-10 group-hover:opacity-100 ">
      <button className={`custom-swiper-button-prev-${index} absolute left-1 cursor-pointer flex items-center justify-center w-8 h-8  text-white`}>
        <ChevronLeft />{" "}
      </button>
      <button className={`custom-swiper-button-next-${index} absolute right-1 cursor-pointer flex items-center justify-center w-8 h-8  text-white`}>
        {" "}
        <ChevronRight />{" "}
      </button>
    </div>
    </div>
  );
};

export default CarCardSwiperComponent;
