"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles

import { Navigation, Pagination } from "swiper/modules";


import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewSwiperSlide from "./review-swiper-slice";
import {motion} from 'framer-motion'

type Props = {};

const ReviewSwiper = (props: Props) => {
  const reviews = [
    {
      name: "ammar",
      stars: 5,
      date: new Date(),
      content:
        "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
      logo: "",
    },
    {
      name: "youcef",
      stars: 3.5,
      date: new Date(),
      content:
        "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
      logo: "",
    },
    {
      name: "karim",
      stars: 4,
      date: new Date(),
      content:
        "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
      logo: "",
    },
    {
      name: "mohamed swaghi",
      stars: 3.5,
      date: new Date(),
      content:
        "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipsumLorem ipsumLorem ipsumLorem ipsumipsumLorem ipsumLorem ipsumLorem ipsumipsumLorem ipsumLorem ipsumLorem ipsum",
      logo: "",
    },
    {
      name: "john doe",
      stars: 2,
      date: new Date(),
      content:
        "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
      logo: "",
    },
  ];

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <motion.div className="relative"
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0,transition:{
        delay:0.2,duration:0.5
    }}}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        style={{ padding: 20 }}
        slidesPerView={1}
        className="mt-12  max-w-[1300px] "
        spaceBetween={30}
        navigation={{
          nextEl: `.custom-swiper-reivew-next`,
          prevEl: `.custom-swiper-review-back`,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i} className="">
            <ReviewSwiperSlide i={i} review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute container top-1/2 z-20">
        <button className="custom-swiper-review-back absolute -left-1 bg-white cursor-pointer flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondaryGreen hover:text-white transition shadow-md text-secondaryGreen">
          <ChevronLeft />{" "}
        </button>
        <button className="custom-swiper-reivew-next absolute -right-1 bg-white cursor-pointer flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondaryGreen hover:text-white transition shadow-md text-secondaryGreen">
          {" "}
          <ChevronRight />{" "}
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewSwiper;
