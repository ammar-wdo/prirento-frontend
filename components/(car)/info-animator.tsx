'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import {motion} from 'framer-motion'

type Props = {
    children:ReactNode
}

const InfoAnimator = ({children}: Props) => {
    const [mount, setMount] = useState(false)

    useEffect(()=>{setMount(true)},[])
    if(!mount) return null
  return (
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0,transition:{duration:0.5}}}>
        {children}
    </motion.div>
  )
}

export default InfoAnimator