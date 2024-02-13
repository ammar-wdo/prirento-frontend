import React from "react";
import Heading from "../heading";
import TipsDescription from "./tips-description";


type Props = {};

const TipsComponent = (props: Props) => {

   
  return (
    <div className="pb-12">
        <div className="container">
        <Heading title="How it works">
        <span>
          Renting a luxury car has never been easier.Our streamlined process
          makes it simple for you <br />
          to book and confirm your vehice of choice online{" "}
        </span>
      </Heading>

      <TipsDescription/>
        </div>

 
    </div>
  );
};

export default TipsComponent;
