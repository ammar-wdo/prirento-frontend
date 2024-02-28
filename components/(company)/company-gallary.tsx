'use client'

import CarSwiper from "../(car)/car-swiper"

type Props = {
    gallary:string[]
}

const CompanyGallary = ({gallary}: Props) => {
  return (
   <CarSwiper images={gallary} />
  )
}

export default CompanyGallary