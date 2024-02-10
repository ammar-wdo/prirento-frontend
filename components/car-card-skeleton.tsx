import React from 'react'
import { Skeleton } from './ui/skeleton'

type Props = {}

const CarCardSkeleton = (props: Props) => {
  return (
    <div className="w-full rounded-3xl overflow-hidden border-none p-0 border ">
    <div className="p-0">
     <Skeleton className='w-full aspect-video rounded-none'/>
<div className="p-4  bg-white">
<section className="flex justify-between ">
        <div className="flex flex-col gap-3">
          <Skeleton className="w-[100px] p-2 rounded-full"/>
          <Skeleton className='w-[60px] p-2'/>
           
       
          <Skeleton
            className="w-[100px] p-2"/>
        </div>

        <div></div>
      </section>

      <Skeleton className=" w-full p-8  rounded-lg  mt-4"/>
     <Skeleton className='mt-4 w-full rounded-full p-6'/>
</div>
     
    </div>
  </div>
  )
}

export default CarCardSkeleton