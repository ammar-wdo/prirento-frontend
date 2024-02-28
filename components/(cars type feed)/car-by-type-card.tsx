"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CarCardType, CarPublicType } from "@/types";
import CarCardSwiperComponent from "./car-swiper";
import { CarFront, Gauge, Info, Settings2, Users } from "lucide-react";
import CarFeaturesComponent from "./car-features-component";
import { Button } from "../ui/button";
import { carsMapper } from "@/mapper";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import qs from "query-string";
import Image from "next/image";

type Props = {
  car: CarCardType | CarPublicType;

  notAvailable?: boolean;
  border?: boolean;
  startDate?: string | undefined;
  endDate?: string | undefined;
  startTime?: string | undefined;
  endTime?: string | undefined;
  pickupLocation?: string;
  dropOffLocation?: String;
};

const CarByTypeCard = ({
  car,

  notAvailable,
  border,
  startDate,
  startTime,
  endDate,
  endTime,
  pickupLocation,
  dropOffLocation,
}: Props) => {
  const fadeIn = {
    initial: {
      y: 20,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 100,
      transition: {
        delay: 0.1,
        duration: 0.9,
      },
    },
  };

  const url = qs.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${car.companySlug}/${car.slug}` as string,
    query: {
      startDate,
      endDate,
      startTime,
      endTime,
      location: pickupLocation,
      ...(!!dropOffLocation && {dropOffLocation:dropOffLocation as string})
    },
  });

  let price: number | null = null;
  if ("oneDayPrice" in car) {
    price = car?.oneDayPrice; // CarCardType
  } else if ("availablePrice" in car) {
    price = car?.availablePrice; // CarPublicType
  }

  let period = "day";
  if ("period" in car) {
    period = car?.period;
  }

  console.log("startDate", startDate);
  return (
    <motion.div
      viewport={{ once: true }}
      variants={fadeIn}
      initial="initial"
      whileInView="whileInView"
      className="h-full"
    >
      <Card
        className={cn(
          "w-full rounded-3xl overflow-hidden p-0 h-full",
          border ? "border " : "border-none "
        )}
      >
        <CardContent className="p-0 flex flex-col h-full">
          <CarCardSwiperComponent index={car.id} gallary={car.gallary} />
          <div className="p-4 mt-4 flex  flex-col flex-1">
            <section className="flex justify-between mb-4">
              <div className="flex flex-col gap-3 justify-between mb-3">
                <h3 className="text-xl capitalize font-medium">
                  {car.carName}
                </h3>
                {!notAvailable && price && (
                  <p className="">
                    <span className="text-xl font-bold">{price}</span>
                    <span className="text-muted-foreground ml-1 text-sm">
                      AED /{period}
                    </span>
                  </p>
                )}
                {car.slug && (
                  <Link href={url} className="w-fit hover:underline">
                    <div
                      className="flex items-center  gap-2 
            "
                    >
                      <Info className="w-4 h-4 " />
                      <span className="first-letter:capitalize text-sm ">
                        more details
                      </span>
                    </div>
                  </Link>
                )}
              </div>

             
<div className="flex flex-col items-center">
  <span className="text-sm">Reviews</span>
  
  <span className="rounded-lg bg-secondaryGreen w-14 aspect-square flex items-center justify-center font-medium text-white">
8.8
  </span>
  <Link href={`/${car.companySlug}`}>
  <div className="my-2 relative w-14  aspect-video ">
  <Image src={car.companyLogo} fill alt="company logo " className="object-contain"/>
  </div>
  </Link>
 
</div>

            
            </section>

            <section className="flex items-center justify-center gap-10 p-3 mb-4 rounded-xl bg-gray-100 mt-auto">
              <CarFeaturesComponent
                title={car.kmIncluded.toString()}
                icon={<Gauge className="w-4 h-4" />}
              />
              <CarFeaturesComponent
                title={car.transmition.toString()}
                icon={<Settings2 className="w-4 h-4" />}
              />
              <CarFeaturesComponent
                title={car.seats.toString()}
                icon={<Users className="w-4 h-4" />}
              />
              <CarFeaturesComponent
                title={carsMapper[car.carType].title}
                icon={<CarFront className="w-4 h-4" />}
              />
            </section>
            <Button
              asChild
              variant={"siteMain"}
              className={cn(
                "w-full rounded-full",
                notAvailable && "pointer-events-none cursor-not-allowed"
              )}
            >
              <Link href={url} className=" w-full">
                {" "}
                {notAvailable ? "Not Available" : "Book Now"}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CarByTypeCard;
