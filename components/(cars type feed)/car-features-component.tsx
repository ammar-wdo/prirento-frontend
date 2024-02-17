import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {icon:ReactNode,
title:string,
row?:boolean}

const CarFeaturesComponent = ({icon,title,row}: Props) => {
  return (
    <div className={cn('flex flex-col items-center ',row && 'flex-row gap-3')}>
<span>{icon}</span>
<span className='capitalize font-light text-sm'>{title}</span>
    </div>
  )
}

export default CarFeaturesComponent