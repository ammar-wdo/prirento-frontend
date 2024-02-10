'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import React, { useState,useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';



import { Navigation ,Autoplay} from 'swiper/modules';
import { BrandType } from '@/types';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
    brands:BrandType[]
}

const BrandsSwiper = ({brands}: Props) => {
const [mount, setMount] = useState(false)
 useEffect(()=>{
    setMount(true)
 },[])
 
 if(!mount) return null
  return (
    <>
        <Swiper

     
      modules={[Navigation,Autoplay]}
      spaceBetween={30}
   
      navigation={{
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      }}
    
     
      loop={true}
      speed={3000}
      autoplay={{delay:2500,disableOnInteraction:false}}

   
    
     
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
      }}
    >
    
    {brands.map(brand=>  <SwiperSlide key={brand.id}><div className='w-[100px] aspect-square relative mx-auto'><Image fill alt='brand' src={brand.logo} className='object-contain'/></div></SwiperSlide>)}
     
    </Swiper>
    <div className='relative container -mt-16 z-10'>
    <div className="custom-swiper-button-prev absolute right-1 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full" > <ArrowRight/> </div>
    <div className="custom-swiper-button-next absolute left-1 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full" > <ArrowLeft/> </div>
    </div>
   
    </>

  )
}

export default BrandsSwiper