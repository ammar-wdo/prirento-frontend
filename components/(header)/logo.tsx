import Image from "next/image";
import React from "react";

type Props = {
  white?: boolean;
};

const Logo = ({ white }: Props) => {
  return (
    <div >
      <Image
        src={!white ? "/main-logo.png" : "/logo-content.png"}
        width={100}
        height={100}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
