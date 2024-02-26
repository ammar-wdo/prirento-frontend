import ContentBanner from "@/components/(content banner)/content-banner";
import ErrorComponent from "@/components/error-component";
import { fetcher } from "@/lib/utils";
import { GET_ABOUT } from "@/links";
import { AboutType } from "@/types";
import React from "react";
import dynamic from "next/dynamic";
import ReviewsComponent from "@/components/(reviews)/reviews-component";
import BenefitsComponent from "@/components/(benefits)/benefits-component";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {};

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
        {/* Content */}
        <div className="container">
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
