import React from "react";
import Heading from "../heading";
import ReviewSwiper from "./review-swiper";
import { fetcher } from "@/lib/utils";
import { CHECK_FOR_REVIEW } from "@/links";
import { Review } from "@/types";
import ErrorComponent from "../error-component";

type Props = {};

const ReviewsComponent = async(props: Props) => {

  const reviewsRes = await fetcher<{success:boolean,error?:string,reviews:Review[]}>(CHECK_FOR_REVIEW)

  if(!reviewsRes.success) return <div className="min-h-[500px] flex items-center justify-center"><ErrorComponent description={reviewsRes.error as string} /></div>


  return (
    <div className="py-16">
      <Heading title="reviews">
        <span>
          We are proud to collaborate with some of the best luxury cars rental
          cars in the market, here
          <br /> are some reviews the clients said previously about our partners
        </span>
      </Heading>

      <div className="container">

<ReviewSwiper reviews={reviewsRes.reviews}/>
      </div>
    </div>
  );
};

export default ReviewsComponent;
