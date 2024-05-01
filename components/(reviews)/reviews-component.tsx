import React from "react";
import Heading from "../heading";
import ReviewSwiper from "./review-swiper";
import { cn, fetcher } from "@/lib/utils";
import { CHECK_FOR_REVIEW } from "@/links";
import { Review } from "@/types";
import ErrorComponent from "../error-component";
import NoResult from "../no-result";

type Props = {
  companySlug?: string;
  hideHeading?: boolean;
};

const ReviewsComponent = async ({ companySlug, hideHeading }: Props) => {
  const reviewsRes = await fetcher<{
    success: boolean;
    error?: string;
    reviews: Review[];
  }>(
    !companySlug
      ? CHECK_FOR_REVIEW
      : CHECK_FOR_REVIEW + `?companySlug=${companySlug}`
  );

  if (!reviewsRes.success)
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <ErrorComponent description={reviewsRes.error as string} />
      </div>
    );

  return (
    <div className={cn("sm:py-16 py-6 ", hideHeading && "py-4")}>
      {!hideHeading && (
        <Heading title="reviews">
          <span>
            We are proud to collaborate with some of the best luxury cars rental
            companies in the market, here
            <br /> are some reviews the clients said previously about our
            partners
          </span>
        </Heading>
      )}

      <div className="container">
        {!reviewsRes.reviews.length ? (
          <div className="mt-8">
            <NoResult title="No Reviews" />
          </div>
        ) : (
          <div className={!hideHeading ? "mt-12" : ""}>
            <ReviewSwiper reviews={reviewsRes.reviews} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsComponent;
