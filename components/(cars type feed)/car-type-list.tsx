import { fetcher } from '@/lib/utils'
import { GET_CARS_BY_TYPE } from '@/links'
import { CarCardType } from '@/types'
import React from 'react'
import CarByTypeCard from './car-by-type-card'

type Props = {
    query:string
}

const CarTypeList = async({query}: Props) => {
    const cars = await fetcher<{cars:CarCardType[]}>(GET_CARS_BY_TYPE + `?carType=${query}`).then(data=>data.cars)
    await new Promise(res=>setTimeout(res, 20000))
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
    {cars.map(car=><CarByTypeCard key={car.id} car={car} />)}
            </div>
  )
}

export default CarTypeList