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
import Image from "next/image";
import { CircleDollarSign, Users } from "lucide-react";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = {};

export const metadata: Metadata = {
  title:
    "Experience Luxury at Its Finest: Prirento | Premier Car Rental Service in UAE ",
  description:
    "Discover unparalleled luxury with Pri Rento, your ultimate destination for premium car rentals in the UAE. Explore our fleet of meticulously maintained vehicles, curated to elevate your driving experience. Whether it's for business or leisure, indulge in sophistication and comfort with our unparalleled service. Contact us today and unlock the epitome of luxury on the UAE roads.",
  openGraph: {
    title:
      "Experience Luxury at Its Finest: Prirento | Premier Car Rental Service in UAE ",
    description:
      "Discover unparalleled luxury with Pri Rento, your ultimate destination for premium car rentals in the UAE. Explore our fleet of meticulously maintained vehicles, curated to elevate your driving experience. Whether it's for business or leisure, indulge in sophistication and comfort with our unparalleled service. Contact us today and unlock ∏the epitome of luxury on the UAE roads.",

    images: ["/banner.png"],
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

      <section className="mt-24 ">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-24 container ">
          <div className="aspect-[1.2/1] w-full rounded-3xl overflow-hidden relative">
            <Image
              alt="about figure"
              src={"/about1.png"}
              className="object-cover"
              fill
            />
          </div>

          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-4xl">Who are we ?</h2>
            <p className="text-xl text-justify mt-12 lg:mt-0">
              Prirento is your gateway to sports car rental in Dubai, offering a
              curated fleet of the world&apos;s most prestigious vehicles. As leaders
              in exotic car rental, we deliver unparalleled luxury, style, and
              performance for every journey. With a commitment to excellence and
              personalized service, we redefine the standard of driving
              elegance. Discover the thrill of the road with Prirento, where
              every drive is a statement of prestige.
            </p>

            {/* greeen component */}
            <div className="rounded-3xl bg-main p-8 flex items-center gap-4 mt-12 lg:mt-0">
              <span className="rounded-full flex items-center justify-center w-12 h-12 shrink-0  bg-secondaryGreen">
                <CircleDollarSign className="text-white" size={20} />
              </span>
              <p className="text-white text-base md:text-2xl font-semibold">
                Best Prices in different companies
              </p>
            </div>
          </div>
        </article>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-24 container  mt-24">
          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-4xl">What do we offer ?</h2>
            <p className="text-xl text-justify mt-12 lg:mt-0">
              At Prirento, we specialize in sports car hire in Dubai, with an
              unmatched selection of premium vehicles. Whether you're looking to
              hire a Lamborghini, rent a Ferrari, or explore the city with a
              Bentley, Mercedes-Benz, or Rolls-Royce, we have you covered. Our
              fleet includes only the best in luxury and performance, providing
              premium car rental in Dubai like no other. From BMW to Lambo hire,
              each car is meticulously maintained to offer you the ultimate
              driving experience. Experience the pinnacle of elegance with
              Prirento, where every journey is crafted to perfection.
            </p>

            {/* greeen component */}
            <div className="rounded-3xl bg-main p-8 flex items-center gap-4 mt-12 lg:mt-0">
              <span className="rounded-full flex items-center justify-center w-12 h-12 shrink-0  bg-secondaryGreen">
                <Users className="text-white" size={20} />
              </span>
              <p className="text-white text-base md:text-2xl font-semibold">
                Low Prices in Dubai
              </p>
            </div>
          </div>
          <div className="aspect-[1.2/1] w-full rounded-3xl overflow-hidden relative">
            <Image
              alt="about figure"
              src={"/about2.png"}
              className="object-cover"
              fill
            />
          </div>
        </article>
        {/* Content */}
        <div className="container mt-20">
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
