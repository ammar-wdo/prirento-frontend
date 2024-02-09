import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='bg-main px-12 sm:px-24 md:px-32 lg:px-52 h-[20vh] md:h-[40vh]  lg:h-[50vh] flex items-center  overflow-hidden lg:pb-20 flex-col sm:gap-12'>
        <p className='capitalize text-center lg:text-5xl md:text-3xl text-xl text-white font-medium md:mt-12'>Find, book, and rental car<br/> in <span className='text-secondaryGold'>easy</span> steps.</p>
     <div className='w-full max-w-[900px]  aspect-[16/7] relative mt-auto md:mt-0'>
        <Image src={'/banner.png'} alt='banner' fill  />

     </div>
      
    </div>
  )
}

export default Banner