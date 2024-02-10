import { fetcher } from '@/lib/utils'
import { GET_BRANDS } from '@/links'
import { BrandType } from '@/types'
import React from 'react'
import BrandsSwiper from './brands-swoper'

type Props = {}

const BrandsSwiperServerWrapeer =async (props: Props) => {
    const brands = await fetcher<{brands:BrandType[]}>(GET_BRANDS).then(data=>data.brands)
  return (
    <BrandsSwiper brands={brands}/>
  )
}

export default BrandsSwiperServerWrapeer