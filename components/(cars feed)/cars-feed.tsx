import { fetcher } from '@/lib/utils'
import qs from 'query-string'
import { CarCardType } from '@/types'
import React from 'react'
import { GET_CARS } from '@/links'

type Props = {
    searchParams:{[key:string]:string | string[] | undefined}
}

const CarsFeed = async({searchParams}: Props) => {
    const url = qs.stringifyUrl({
        url:GET_CARS,
        query:{...searchParams}
    })
    
    const cars = await fetcher<{cars:CarCardType[]}>(url).then(data=>data.cars)
  return (
    <div>
{cars.map(car=><div>car   </div>)}
    </div>
  )
}

export default CarsFeed