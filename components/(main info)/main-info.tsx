import Image from "next/image";
import React from "react";

type Props = {};

const info = [
  {
    title: "Risk-Free Rental",
    description: "Rent confidently with our money-back guarantee.",
    icon: "/risk-management.png",
  },
  {
    title: "Premium Luxury selection",
    description: "Discover and compare UAE’s top rental agencies.",
    icon: "/star.png",
  },
  {
    title: "Exceptional service",
    description: "No hidden costs, trustworthy, Stress-free",
    icon: "/premium.png",
  },
];

const MainInfo = (props: Props) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20 gap-10">
      {info.map((el) => (
        <article key={el.title} className="flex flex-col   ">
          <div className="flex items-center gap-4 ">
            <div className="relative w-12 h-12">
              <Image src={el.icon} fill alt="icon" className="object-contain" />
            </div>
            <h3 className="capitalize font-bold text-[17px]">{el.title}</h3>
          </div>
          <p className="mt-6 sm:text-[25px] text-[23px] font-bold ">{el.description}</p>
        </article>
      ))}
    </section>
  );
};

export default MainInfo;
