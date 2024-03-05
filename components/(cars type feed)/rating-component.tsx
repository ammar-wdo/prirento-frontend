import { fetcher } from "@/lib/utils";
import { GET_CAR_RATING } from "@/links";
import React from "react";

type Props = {
  carSlug: string;
};

const RatingComponent = async ({ carSlug }: Props) => {
  const ratingRes = await fetcher<{
    success: boolean;
    averageRating: number;
    error?: string;
  }>(GET_CAR_RATING + "/" + carSlug + "/rating");

  if (!ratingRes.success) return null;

  if (+ratingRes.averageRating > 0)
    return (
      <div>
        <span className="text-sm">Reviews</span>

        <span className="rounded-lg bg-secondaryGreen w-14 aspect-square flex items-center justify-center font-medium text-white">
          {ratingRes.averageRating.toFixed(1)}
        </span>
      </div>
    );
};

export default RatingComponent;
