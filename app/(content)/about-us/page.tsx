import ContentBanner from "@/components/(content banner)/content-banner";
import ErrorComponent from "@/components/error-component";
import { fetcher } from "@/lib/utils";
import { GET_ABOUT } from "@/links";
import { AboutType } from "@/types";
import React from "react";
import dynamic from "next/dynamic";
import ReviewsComponent from "@/components/(reviews)/reviews-component";
import BenefitsComponent from "@/components/(benefits)/benefits-component";
import { Metadata } from "next";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {};


export const metadata: Metadata = {
  title: "PRIRENTO - About us - UAE",
  description:
    "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
  openGraph: {
    title: "PRIRENTO - About us - UAE",
    description:
      "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
      
      images:['/banner.png']
  },
};

const page = async (props: Props) => {
  const aboutRes = await fetcher<{
    success: boolean;
    error?: string;
    about: AboutType;
  }>(GET_ABOUT);

  if (!aboutRes.success)
    return (
      <div className="min-h-[1200px] flex items-center justify-center">
        <ErrorComponent description={aboutRes.error as string} />
      </div>
    );
  const { about } = aboutRes;
  return (
    <div>
      <ContentBanner title="About us" />

      <section className="mt-12 ">
      <h1 className="text-5xl font-semibold my-4 container">About us</h1>
        {/* Content */}
        <div className="container mt-12">
    
        <Editor initialContent={about.content} />
        </div>
     

        {/* Benefits component */}
        <div className="mt-12">
          <BenefitsComponent />
        </div>

        {/* Reviews component */}
        <div className="mt-12 container">
          <ReviewsComponent />
        </div>
      </section>
    </div>
  );
};

export default page;
