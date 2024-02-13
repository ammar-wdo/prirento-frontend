'use client'
import Image from 'next/image'
import {motion} from 'framer-motion'

type Props = {}

const BannerImage = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0,y:20}}
    animate={{opacity:1,y:0,transition:{
        duration:1
    }}}
    className="mt-2 sm:mt-4 mx-auto w-full aspect-[30.1/11] relative max-w-[900px]">
    <Image src={"/banner.png"} fill alt="banner image" />
  </motion.div>
  )
}

export default BannerImage