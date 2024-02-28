import CarDescription from "@/components/(car)/car-description";
import CarTypeFeedSkeleton from "@/components/(cars type feed)/car-type-feed-skeleton";
import CompanyCars from "@/components/(company)/company-cars";
import CompanyGallary from "@/components/(company)/company-gallary";
import CompanyScheduleComponent from "@/components/(company)/company-schedule-component";
import ContentBanner from "@/components/(content banner)/content-banner";
import ErrorComponent from "@/components/error-component";
import { Skeleton } from "@/components/ui/skeleton";
import { fetcher } from "@/lib/utils";
import { GET_COMPANY } from "@/links";
import { Company } from "@/types";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

type Props = { params: { companySlug: string } };

const page = async ({ params }: Props) => {
  const res = await fetcher<{
    error?: string;
    success: boolean;
    company: Company;
  }>(GET_COMPANY + `/${params.companySlug}`);

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
      <div className="container mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <CompanyGallary gallary={res.company.gallary} />
        </div>
        <div className="md:col-span-1 h-full">
         <CompanyScheduleComponent openeingTimes={res.company.openingTime}/>
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
    </div>
  );
};

export default page;
