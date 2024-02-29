import ErrorComponent from "@/components/error-component";
import ReviewForm from "@/components/review-form";
import { fetcher } from "@/lib/utils";
import { CHECK_FOR_REVIEW } from "@/links";
import React from "react";

type Props = {
    params:{bookingId:string}
};

const page = async({params}: Props) => {

const bookingCheckRes = await fetcher<{success:boolean,error?:string}>(CHECK_FOR_REVIEW + '/' + params.bookingId + '/check')

if(!bookingCheckRes.success) return <div className="min-h-[700px] flex items-center justify-center"><ErrorComponent description={bookingCheckRes.error as string} /></div>

  return (
    <div className="">
      <section className="container  flex items-center justify-center flex-col gap-12 min-h-screen">
        <h1 className=" text-4xl font-medium">Leave a review</h1>
        <ReviewForm />
      </section>
    </div>
  );
};

export default page;
