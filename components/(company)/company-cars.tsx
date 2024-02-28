import { fetcher } from "@/lib/utils";
import { GET_COMPANY } from "@/links";
import { CarCardType } from "@/types";
import React from "react";
import ErrorComponent from "../error-component";
import CarByTypeCard from "../(cars type feed)/car-by-type-card";

type Props = {
  companySlug: string;
};

const CompanyCars = async ({ companySlug }: Props) => {
  const res = await fetcher<{
    success: boolean;
    error?: string;
    cars: CarCardType[];
  }>(GET_COMPANY + "/" + companySlug + "/cars");

  if (!res.success) return;

  <div className="">
    <ErrorComponent description={res.error as string} />
  </div>;
  return (
    <div>
      <h3 className="text-3xl font-bold">Company cars</h3>
      <div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-4"
      >
        {res.cars.map((car, index) => (
          <CarByTypeCard border car={car} />
        ))}
      </div>
    </div>
  );
};

export default CompanyCars;
