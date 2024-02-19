import { fetcher } from "@/lib/utils";
import qs from "query-string";
import {  CarPublicType } from "@/types";
import React from "react";
import { GET_CARS } from "@/links";
import CarByTypeCard from "../(cars type feed)/car-by-type-card";
import NoResult from "../no-result";
import Scroller from "../scroller";
import ErrorComponent from "../error-component";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const CarsFeed = async ({ searchParams }: Props) => {
  const url = qs.stringifyUrl({
    url: GET_CARS,
    query: { ...searchParams },
  });

  const res = await fetcher<{
    availableCars: CarPublicType[];
    notAvailableCars: CarPublicType[];
    success: boolean;
    error?: string;
  }>(url);

  const availableCars = res.availableCars;
  const notAvailableCars = res.notAvailableCars
  if (!res.success)
    return (
    <div className="flex flex-col items-center gap-3">
      <ErrorComponent description={res.error!}/>
      <Button><Link href={`/search`}>Refresh</Link></Button>
    </div>
    );

    if(!availableCars.length && !notAvailableCars.length) return <NoResult />
  return (
    <>
    <Scroller/>
    <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 ">
      {availableCars.map((car,i) => (
      <CarByTypeCard car={car} index={i} border={true} key={car.id}/>
     

      ))}
      {notAvailableCars.map((car,i) => (
      <div className="cursor-not-allowed grayscale-[15] pointer-events-none h-full self-stretch opacity-60 "  key={car.id}><CarByTypeCard border={true} notAvailable={true} car={car} index={i + availableCars.length}/></div>
     

      ))}
    
    </div>
   
    </>
  );
};

export default CarsFeed;
