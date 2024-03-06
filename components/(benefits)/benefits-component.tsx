import React from "react";
import Heading from "../heading";
import { BadgeCheck, HandCoins, Sparkles } from "lucide-react";
import BenefitsCard from "./benefits-card";

type Props = {};

const BenefitsComponent = (props: Props) => {
  const benefits = [
    {
      title: "Quality Choice",
      description:
        "From luxurious sedans and spacious Luxury SUVs to VIP vans, we've got the perfect ride for every story find the perfect match for your journey.",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      title: "Affordable Prices",
      description:
        "Our rental rates are highly competitive and affordable, allowing our customers to enjoy their trips without breaking the bank.",
      icon: <HandCoins className="w-5 h-5" />,
    },
    {
      title: "Convenient Online Booking",
      description:
        "Book your ideal rental car effortlessly with our user-friendly online system. Reserve your vehicle anytime, anywhere, ensuring a hassle-free rental experience from start to finish.",
      icon: <BadgeCheck className="w-5 h-5" />,
    },
  ];
  return (
    <div className="bg-main py-16">
        <div className="container">
        <Heading className="text-white" title="Simplifying Your Luxury Rental Experience">
        <span>
          To make renting easy and hassle-free, we provide a variety of services
          and advantages.
          <br /> We have you covered with a variety of vehicles and flexible
          rental terms.
        </span>
      </Heading>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 ">
        {benefits.map((benefit,index)=><BenefitsCard key={index} index={index} benefit={benefit}/>)}
        </div>
        </div>
    
    </div>
  );
};

export default BenefitsComponent;
