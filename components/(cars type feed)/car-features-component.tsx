import React, { ReactNode } from 'react'

type Props = {icon:ReactNode,
title:string}

const CarFeaturesComponent = ({icon,title}: Props) => {
  return (
    <div className='flex flex-col items-center '>
<span>{icon}</span>
<span className='capitalize font-light'>{title}</span>
    </div>
  )
}

export default CarFeaturesComponent