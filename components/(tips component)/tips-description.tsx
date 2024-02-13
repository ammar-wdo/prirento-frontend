"use client";
import { CalendarCheck2, Laugh, Search } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TipCard from "./tip-card";
import Image from "next/image";

type Props = {};

const TipsDescription = (props: Props) => {
  const tips = [
    {
      title: "Browse and select",
      descriptions:
        "Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.",
      icon: <Search className="w-6 h-6" />,
      image: "/browse.png",
    },
    {
      title: "Book and confirm",
      descriptions:
        "Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.",
      icon: <CalendarCheck2 className="w-6 h-6" />,
      image: "/booking-confirm.png",
    },
    {
      title: "Enjoy your ride",
      descriptions:
        "Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.",
      icon: <Laugh className="w-6 h-6" />,
      image: "/enjoy-ride.png",
    },
  ];

  const fadeIn = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const fadeLeft = {
    initial: { x: -20, opacity: 0 },
    whileInView: { x: 0, opacity: 1, transition: { duration: 0.5,delay:0.5 } },
  };
  const fadeRight = {
    initial: { x: 20, opacity: 0 },
    whileInView: { x: 0, opacity: 1, transition: { duration: 0.5,delay:0.5 } },
  };

  const [index, setIndex] = useState<number | undefined>(undefined);

  return (
    <div className="flex items-center mt-12 ">
      <motion.div
      variants={fadeLeft}
      initial='initial'
      whileInView='whileInView'
      className="flex flex-col gap-3 flex-1">
        {tips.map((tip, i) => (
          <TipCard
          key={i}
            chosenIndex={index}
            index={i}
            setIndex={(indexValue) => setIndex(indexValue)}
            tip={tip}
          />
        ))}
      </motion.div>
      <motion.div
        variants={fadeRight}
        initial='initial'
        whileInView='whileInView'
      className="flex-1 hidden lg:flex aspect-[8/6]  bg-muted rounded-xl xl:-ml-24 lg:-ml-8 items-center justify-end xl:pr-14 lg:pr-6  -z-10 ">
        <motion.div
          key={index}
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="relative xl:w-[550px] lg:w-[450px] aspect-[8/6] "
        >
          <Image
            priority
            fill
            src={index !== undefined ? tips[index].image : "/default.png"}
            className="object-contain"
            alt="tip-image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TipsDescription;
