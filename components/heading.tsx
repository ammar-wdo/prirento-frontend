import React, { ReactNode } from "react";

type Props = { title: string; children?: ReactNode,className?:string };

const Heading = ({title,children,className}: Props) => {
  return <div className={className}>
     <h3 className="text-center  md:text-5xl text-2xl  font-bold capitalize">
          {title}
        </h3>
        <p className="text-center mt-8 text-sm">
        {children}
        </p>
  </div>;
};

export default Heading;
