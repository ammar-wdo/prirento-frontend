import BookingForm from "@/components/(booking form)/booking-form";
import ErrorComponent from "@/components/error-component";
import { fetcher, searchParamsGenerate } from "@/lib/utils";
import { GET_CAR } from "@/links";
import { CarAvailabilityType, SingleCarType } from "@/types";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: { carSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ params, searchParams }: Props) => {
  const urlParams = searchParamsGenerate(searchParams);

//fetch car availability
  const carAvailability = await fetcher<{
    data: CarAvailabilityType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug + `/check?${urlParams}`);


  // fetch car details
  const carDetails = await fetcher<{
    car: SingleCarType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug);

  if(!carDetails.success) return <div className="flex items-center justify-center h-[calc(100vh-70px)]">
  <ErrorComponent description={carDetails.error as string} />
</div>


  if(!carAvailability.success) return <div className="flex items-center justify-center h-[calc(100vh-70px)]">
  <ErrorComponent description={carAvailability.error as string} />
</div>

  if (!carAvailability.data.availability.isAvailable)
    return redirect(`${process.env.NEXT_PUBLIC_BASE_URL!}/${carAvailability.data.companySlug}/${carAvailability.data.slug}?${urlParams}`);

  return (
    <div className="pb-20">
      <BookingForm
      optionalSuperAdminRules = {carAvailability.data.optionalSuperAdminRules}
      mandatorySuperAdminRules={carAvailability.data.mandatorySuperAdminRules}
      carExtraOptions={carAvailability.data.carExtraOptions}
        carImage={carDetails.car.gallary[0]}
        startDate={carAvailability.data.startDate}
        endDate={carAvailability.data.endDate}
        carName={carDetails.car.carName}
        deliveryFee={carAvailability.data.deliveryFee}
        deposit={carAvailability.data.deposit}
        subtotal={carAvailability.data.price as number}
        fee={carAvailability.data.fee}
        terms={carDetails.car.terms}
        companyName={carDetails.car.companyName}
        
      />
    </div>
  );
};

export default page;
