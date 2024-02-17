import { SingleCarType } from '@/types'
import React from 'react'
import CarSwiper from './car-swiper'
import SpecificationsWrapper from './specifications-wrapper'
import CarDescription from './car-description'

type Props = {
   car:SingleCarType
}

const CarFeed = async({car}: Props) => {
  return (
    <article>
        {/* Siwper */}
        <div>
<CarSwiper images={car.gallary}/>
        </div>

    {/* specifications */}
    <div className='mt-12'>
<SpecificationsWrapper car={car}/>
    </div>

{/* description */}
<div className='mt-12'>
<CarDescription title='Description' description={car.description}/>
</div>

    </article>
  )
}

export default CarFeed