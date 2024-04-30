import LottieAnimation from "@/components/lotti-component";
import React from "react";
import animationDate from "@/public/lotti.json";
import animationCancel from "@/public/lotti-cancel.json";
import Link from "next/link";

type Props = {
  searchParams: {
    bookingCode: string;
    canceled:string
  };
};

const page = ({ searchParams }: Props) => {

  const canceled = searchParams.canceled

  if (canceled ==='true')
  return (  <div className="flex items-center justify-center h-screen">
  <div className="flex flex-col items-center ">
   
    <LottieAnimation
          animationData={animationCancel}
          height={200}
          width={200}
        />
   <h3 className="font-semibold mt-12">Your Booking Has Been Canceled</h3>
   <h3 className="text-sm text-muted-foreground mt-3 ">If you have faced any issue please let us know</h3>
    <Link
      href={"/contact-us"}
      className="mt-8 bg-secondaryGreen px-4 py-2 rounded-xl text-white capitalize"
    >
     Contact Us
    </Link>
  </div>
</div>)
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
