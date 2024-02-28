import LoginForm from "@/components/login-form";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
      <section className="hidden lg:block lg:col-span-2 relative h-full ">
        <Image
          src={"/login.png"}
          fill
          alt="login image"
          className="object-cover"
        />
        <span className="flex flex-col uppercase text-white text-6xl absolute top-8 left-8 font-semibold">
          <span>PRI</span>
          <span>RENTO</span>
        </span>
      </section>
      <section className="flex items-center justify-center p-12">
        <LoginForm/>
      </section>
    </div>
  );
};

export default page;
