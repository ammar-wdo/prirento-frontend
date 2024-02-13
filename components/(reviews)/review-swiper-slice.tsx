'use client'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { Card, CardContent, CardHeader } from '../ui/card'
import ReactStars from 'react-stars'

type Props = {
    i:number,
    review: {
        name: string;
        stars: number;
        date: Date;
        content: string;
        logo: string;
    }
}

const ReviewSwiperSlide = ({i,review}: Props) => {
  return (
    <Card className="p-4  rounded-xl  border-none shadow-[1px_1px_5px] min-h-[200px]  shadow-gray-200">
    <CardHeader className=" p-0  ">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
        <h3 className="font-medium capitalize">{review.name}</h3>
        <ReactStars
              edit={false}
              size={14}
              color2="gold"
              color1="gray"
              count={5}
              value={review.stars}

        />
      </div>
      <div>
        logo
      </div>
   
        </div>
      <p>{review.date.toLocaleDateString()}</p>
    </CardHeader>
    <CardContent className="text-xs p-0 mt-3 text-muted-foreground">
        {review.content}
    </CardContent>
  </Card>
  )
}

export default ReviewSwiperSlide