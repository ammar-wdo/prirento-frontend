"use client";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader } from "../ui/card";
import ReactStars from "react-stars";
import { Review } from "@/types";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ReviewSlicer from "./review-slicer";

type Props = {
  i: number;
  review: Review;
};

const ReviewSwiperSlide = ({ i, review }: Props) => {
  return (
    <Card className="p-4  rounded-xl  border-none shadow-[1px_1px_5px] min-h-[200px]  shadow-gray-200">
      <CardHeader className=" p-0  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center sm:flex-row flex-col sm:gap-2">
            <h3 className="font-medium capitalize">{review.user}</h3>
            <ReactStars
              edit={false}
              size={14}
              color2="gold"
              color1="gray"
              count={5}
              value={review.rate}
            />
          </div>
          <Link href={`/${review.companySlug}`}>
            <div className="w-20 aspect-video relative">
              <Image
                src={review.companyLogo}
                alt="company logo"
                className="object-contain"
                fill
              />
            </div>
          </Link>
        </div>
        <p>
          {formatDate(new Date(review.createdAt), "en-GB", {
            timeZone: "Asia/Dubai",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </p>
      </CardHeader>
      <CardContent className="text-xs p-0 mt-3 text-muted-foreground">
        <ReviewSlicer reviewContent={review.reviewContent} />
      </CardContent>
    </Card>
  );
};

export default ReviewSwiperSlide;
