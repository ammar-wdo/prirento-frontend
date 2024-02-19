"use client";

// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const CarSwiper = ({ images }: { images: string[] }) => {


  const [mount, setMount] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return <Skeleton className="w-full aspect-video rounded-xl"/>;

  return (
    <>
      {/* Main Swiper: Displays the big image */}
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper:mount &&  thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        className="mainSwiper rounded-xl overflow-hidden"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-video relative ">
              <Image
                src={image}
                alt={`Thumbnail ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper: Shows small other images */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}

        watchSlidesProgress={true}
        modules={[mount && Thumbs]}
        className="thumbsSwiper mt-6"
        breakpoints={{
            // When the viewport width is >= 320px, display 3 slides
            320: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            // You can add more breakpoints for larger screens if needed
            768: {
              slidesPerView: 5,
              spaceBetween: 10
            },
            // Add as many breakpoints as you need
          }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                "aspect-video relative rounded-xl overflow-hidden cursor-pointer transition",
                index === activeIndex &&
                  "ring-1 ring-offset-4 ring-black scale-[0.85]"
              )}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarSwiper;
