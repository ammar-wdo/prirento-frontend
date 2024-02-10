'use client'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
type Props = {
  gallary: string[];
};
const CarCardSwiperComponent = ({ gallary }: Props) => {
  return (
    <Swiper
      // Install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
    >
      {gallary.map((image) => (
        <SwiperSlide key={image} >
          <div className="w-full aspect-video relative">
            <Image fill src={image} alt="car image"
            className="object-cover" />
          </div>
        </SwiperSlide>
      ))}

      {/* Add more SwiperSlide components as needed */}
    </Swiper>
  );
};

export default CarCardSwiperComponent;
