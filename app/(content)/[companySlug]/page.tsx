import CarDescription from "@/components/(car)/car-description";
import CarTypeFeedSkeleton from "@/components/(cars type feed)/car-type-feed-skeleton";
import CompanyCars from "@/components/(company)/company-cars";
import CompanyGallary from "@/components/(company)/company-gallary";
import CompanyScheduleComponent from "@/components/(company)/company-schedule-component";
import ContentBanner from "@/components/(content banner)/content-banner";
import ReviewsComponent from "@/components/(reviews)/reviews-component";
import ErrorComponent from "@/components/error-component";
import { Skeleton } from "@/components/ui/skeleton";
import { fetcher, getCompanyInfo } from "@/lib/utils";
import { GET_COMPANY } from "@/links";
import { Company } from "@/types";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = { params: { companySlug: string } };

export const revalidate = 0

//generate metadata
// export async function generateMetadata(
//   { params }: Props,

// ): Promise<Metadata> {


//   const res = await getCompanyInfo(params.companySlug)

// if(!res.company || !res.success) return {
//   title:'Not found',
//   description:'This slug does not exist'
// }



 
//   return {
//     title:`Amazing luxurious cars  - ${res?.company?.name} | PRIRENTO` ,
//     description:`Find best luxurious cars  at ${res.company.name}.`,
    
//     openGraph: {
//       title:`Amazing luxurious cars  - ${res?.company?.name} | PRIRENTO` ,
//     description:`Find best luxurious cars  at ${res?.company?.name}.`,
//       images: [...res.company.gallary],
//     },
//   }
// }

const page = async ({ params }: Props) => {


  const res = await getCompanyInfo(params.companySlug)

  if (!res.success)
    return (
      <div className="min-h-[700px] flex items-center justify-center">
        <ErrorComponent description={res.error as string} />
      </div>
    );

  return (
    <div className="pb-12">
      {/* Banner */}
      <ContentBanner title={res.company.name} />

      {/* gallary and openning days */}
      <div className="container mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <CompanyGallary gallary={res.company.gallary} />
        </div>
        <div className="lg:col-span-1 h-full">
            <CarDescription title="Opening Hours" >
            <CompanyScheduleComponent openeingTimes={res.company.openingTime}/>
            </CarDescription>
      
        </div>
      </div>

      {/* Content */}
      <div className="container mt-12 ">
        <CarDescription title="Description">
          <div className="min-h-[600px]">
            <Editor initialContent={res.company.content} />
          </div>
        </CarDescription>
      </div>

      {/* company cars*/}
      <div className="container mt-12">
        {" "}
        <Suspense fallback={<CarTypeFeedSkeleton />}>
          <CompanyCars companySlug={params.companySlug} />
        </Suspense>
      </div>

      {/* Company reviews */}

      <div className="mt-12 container">
        <Suspense fallback={<Skeleton className="min-h-[300px]"/>}>
          <CarDescription title="Reviews">
          <ReviewsComponent hideHeading={true} companySlug={params.companySlug} />
          </CarDescription>
        
        </Suspense>
      </div>
    </div>
  );
};

export default page;
