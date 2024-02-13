import React from "react";
import Heading from "../heading";
import ReviewSwiper from "./review-swiper";

type Props = {};

const ReviewsComponent = (props: Props) => {


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

<ReviewSwiper/>
      </div>
    </div>
  );
};

export default ReviewsComponent;
