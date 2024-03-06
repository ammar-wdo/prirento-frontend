"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import React, { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { BrandType } from "@/types";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  brands: BrandType[];
};

const BrandsSwiper = ({ brands }: Props) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <>
      <Swiper
       spaceBetween={0}
       centeredSlides={true}
       autoplay={{
         delay: 0,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
         
       }}
       speed={3000}
       loop={true}
       modules={[Autoplay]}
       // Setting CSS variable for transition timing
     
        // modules={[Navigation, Autoplay]}
        // spaceBetween={30}
        // className="max-w-[1200px] "
        // navigation={{
        //   nextEl: ".custom-swiper-button-next",
        //   prevEl: ".custom-swiper-button-prev",
        // }}
        // loop={true}
        // speed={1500}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide
            className="hover:bg-muted rounded-lg p-1 transition "
            key={brand.id}
          >
            <Link href={`/search?brand=${brand.brand}`}>
            <div className="sm:w-[100px] w-[60px] active:scale-95 aspect-square relative mx-auto my-auto cursor-pointer transition">
              <Image
                fill
                alt="brand"
                src={brand.logo}
                className="object-contain"
              />
            </div>
            </Link>
         
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default BrandsSwiper;
