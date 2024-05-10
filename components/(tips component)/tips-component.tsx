import React from "react";
import Heading from "../heading";
import TipsDescription from "./tips-description";


type Props = {};

const TipsComponent = (props: Props) => {

   
  return (
    <div className="pb-12">
        <div className="container">
        <Heading title="Easy Luxury Car Rental">
        <span>
        Discover unparalleled luxury car rental in the UAE with Prirento<br/> your gateway to 
exclusive driving experiences with premium rental cars in Dubai. 
        </span>
      </Heading>

      <TipsDescription/>
        </div>

 
    </div>
  );
};

export default TipsComponent;
