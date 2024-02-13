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
        "We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.",
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
        "With our easy-to-use online booking system, customers can quickly and conveniently reserve their rental car from anywhere, anytime.",
      icon: <BadgeCheck className="w-5 h-5" />,
    },
  ];
  return (
    <div className="bg-main py-16">
        <div className="container">
        <Heading className="text-white" title="Our Services & Benefits">
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
