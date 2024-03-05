import { fetcher } from '@/lib/utils'
import { GET_CAR_REVIEWS } from '@/links'
import { Review } from '@/types'
import React from 'react'
import ErrorComponent from '../error-component'
import NoResult from '../no-result'
import ReviewSwiper from '../(reviews)/review-swiper'

type Props = {
    carSlug:string
}

const CarReviewsComponent = async({carSlug}: Props) => {

    const reviewsRes = await fetcher<{success:boolean,reviews:Review[],error?:string}>(GET_CAR_REVIEWS + '/' + carSlug + '/reviews')

    if(!reviewsRes.success) return <div className='flex items-center justify-center min-h-[400px]'><ErrorComponent description={reviewsRes.error as string}/></div>
  return (
    <div className="container">

    {!reviewsRes.reviews.length ? <div className="mt-8"><NoResult title="No Reviews"/></div> : <div ><ReviewSwiper reviews={reviewsRes.reviews}/></div> }


  </div>
  )
}

export default CarReviewsComponent