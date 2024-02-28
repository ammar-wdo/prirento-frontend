'use client'

import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

type Props = {
    children:ReactNode
  
} & HTMLAttributes<HTMLDivElement>

const InfoAnimator = ({children,...res}: Props) => {
    const [mount, setMount] = useState(false)

    useEffect(()=>{setMount(true)},[])
    if(!mount) return null
  return (

    <motion.div className={res.className}  initial={{opacity:0,y:20}} animate={{opacity:1,y:0,transition:{duration:0.5}}} exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }} >
        {children}
    </motion.div>

  )
}

export default InfoAnimator