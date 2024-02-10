import {
  Card,
  CardContent,
 
} from "@/components/ui/card";
import { CarCardType } from "@/types";
import CarCardSwiperComponent from "./car-swiper";
import {  CarFront, Gauge, Info, Settings2, Users } from "lucide-react";
import CarFeaturesComponent from "./car-features-component";
import { Button } from "../ui/button";
import { carsMapper } from "@/mapper";

type Props = {
  car: CarCardType;
};

const CarByTypeCard = ({ car }: Props) => {
  return (
    <Card className="w-full rounded-3xl overflow-hidden border-none p-0">
      <CardContent className="p-0">
        <CarCardSwiperComponent gallary={car.gallary} />
<div className="p-4 mt-4">
<section className="flex justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="text-base capitalize font-medium">{car.carName}</h3>
            <p>
              <span className="text-lg font-semibold">{car.oneDayPrice}</span>
              <sub className="text-muted-foreground ml-1 text-base">
                AED /day
              </sub>
            </p>
            <div
              className="flex items-center  gap-2 
            "
            >
              <Info className="w-4 h-4 " />
              <span className="first-letter:capitalize text-sm ">
                more details
              </span>
            </div>
          </div>

          <div></div>
        </section>

        <section className="flex items-center justify-center gap-12 p-3 rounded-xl bg-gray-100 mt-4">
          <CarFeaturesComponent
            title={car.kmIncluded.toString()}
            icon={<Gauge className="w-5 h-5" />}
          />
          <CarFeaturesComponent
            title={car.transmition.toString()}
            icon={<Settings2 className="w-5 h-5" />}
          />
          <CarFeaturesComponent
            title={car.seats.toString()}
            icon={<Users className="w-5 h-5" />}
          />
          <CarFeaturesComponent
            title={carsMapper[car.carType].title }
            icon={<CarFront className="w-5 h-5" />}
          />
        </section>
        <Button variant={'siteMain'} className="w-full mt-4 rounded-full">Book Now</Button>
</div>
       
      </CardContent>
    </Card>
  );
};

export default CarByTypeCard;
