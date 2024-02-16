import React from 'react'
import { Skeleton } from '../ui/skeleton'
import CarCardSkeleton from '../car-card-skeleton'

type Props = {}

const CarsSkeletonFeed = (props: Props) => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8  container ">
    {Array(6).fill('').map((car,i)=>
        <CarCardSkeleton key={i}/>)}
            </div>
  )
}

export default CarsSkeletonFeed