import LottieAnimation from "@/components/lotti-component";
import React from "react";
import animationDate from "@/public/lotti.json";
import Link from "next/link";

type Props = {
  searchParams: {
    bookingCode: string;
  };
};

const page = ({ searchParams }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <h3>Thank You For Your Booking</h3>
        <LottieAnimation
          animationData={animationDate}
          height={200}
          width={200}
        />
        <h3 className="text-center font-semibold text-3xl">
        Booking {searchParams.bookingCode} Confirmed

        </h3>
       <h3 className="text-sm text-muted-foreground mt-3">You will receive an email with all the informations you need</h3>
        <Link
          href={"/"}
          className="mt-8 bg-secondaryGreen px-4 py-2 rounded-xl text-white capitalize"
        >
          Home page
        </Link>
      </div>
    </div>
  );
};

export default page;
