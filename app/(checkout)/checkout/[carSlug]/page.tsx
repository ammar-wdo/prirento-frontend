import BookingForm from "@/components/(booking form)/booking-form";
import ErrorComponent from "@/components/error-component";
import { fetcher, searchParamsGenerate } from "@/lib/utils";
import { GET_CAR } from "@/links";
import { CarAvailabilityType, SingleCarType } from "@/types";
import React from "react";

type Props = {
  params: { carSlug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ params, searchParams }: Props) => {
  const urlParams = searchParamsGenerate(searchParams);

//fetch car availability
  const {
    availability,
    success: availableSuccess,
    error: availableError,
  } = await fetcher<{
    availability: CarAvailabilityType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug + `/check?${urlParams}`);
  console.log(availability)

  // fetch car details
  const res = await fetcher<{
    car: SingleCarType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug);

  if(!res.success) return <div className="flex items-center justify-center h-[calc(100vh-70px)]">
  <ErrorComponent description={res.error as string} />
</div>


  if(!availableSuccess) return <div className="flex items-center justify-center h-[calc(100vh-70px)]">
  <ErrorComponent description={availableError as string} />
</div>

  if (!availability.availability.isAvailable)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-70px)]">
        <ErrorComponent description={availability.availability.message as string} />
      </div>
    );

  return (
    <div className="pb-20">
      <BookingForm
      optionalSuperAdminRules = {availability.optionalSuperAdminRules}
      mandatorySuperAdminRules={availability.mandatorySuperAdminRules}
      carExtraOptions={availability.carExtraOptions}
        carImage={res.car.gallary[0]}
        startDate={availability.startDate}
        endDate={availability.endDate}
        carName={res.car.carName}
        deliveryFee={availability.deliveryFee}
        deposit={availability.deposit}
        subtotal={availability.price as number}
        fee={availability.fee}
        
      />
    </div>
  );
};

export default page;
