import LoginForm from "@/components/login-form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
      <section className="hidden lg:block lg:col-span-2 relative h-full ">
        <Image
        priority={true}
          src={"/login.png"}
          fill
          alt="login image"
          className="object-cover"
        />
        <Link href={'/'} className="absolute top-8 left-8">
        <div className=" w-40 aspect-video cursor-pointer ">
     <Image  fill alt="logo" className="object-contain" src={'/white-logo.png'} />
        </div>
        </Link>
      
      </section>
      <section className="flex items-center justify-center p-12">
        <LoginForm/>
      </section>
    </div>
  );
};

export default page;
