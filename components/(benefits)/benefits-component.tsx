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
      title: "Money back guarantee",
      description:
        "Your rental is risk-free with Prirento. Our money-back guarantee ensures peace of mind.",
      icon: <HandCoins className="w-5 h-5" />,
    },
    {
      title: "Convenient Online Booking",
      description:
        "Book your ideal rental car effortlessly with our user-friendly online system. Reserve your car anytime, anywhere, ensuring a hassle-free rental experience from start to finish.",
      icon: <BadgeCheck className="w-5 h-5" />,
    },
  ];
  return (
    <div className="bg-main py-16">
        <div className="container">
        <Heading className="text-white" title="Simplifying Your Luxury Rental Experience">
        <span>
        Discover the pinnacle of luxury car rental with Prirento, offering a premium fleet at Dubai 
Airport and across the city<br/>Experience premium car rental in Dubai with our curated 
collection. Choose Prirento for the best luxury car rental in Dubai.
        </span>
      </Heading>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
        {benefits.map((benefit,index)=><BenefitsCard key={index} index={index} benefit={benefit}/>)}
        </div>
        </div>
    
    </div>
  );
};

export default BenefitsComponent;
