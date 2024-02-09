import { carsMapper } from '@/mapper'
import Image from 'next/image'
import React from 'react'

type Props = {
    type:"SUV" | "super_cars" | "sports" | "convertable" | "classics" | "business"
}

const TypeNavCard = ({type}: Props) => {
  return (
    <div key={type}>
              {" "}
              <div className='justify-self-center hover:bg-main/30 cursor-pointer p-4 transition rounded-xl'>
                <div className="relative w-[50px] h-[50px] mx-auto">
                  <Image className="object-contain" src={carsMapper[type].src} alt="logo" fill />
                </div>
                <p className='text-center text-xs md:text-sm capitalize font-medium'>{carsMapper[type].title}</p>
              </div>
            </div>
  )
}

export default TypeNavCard