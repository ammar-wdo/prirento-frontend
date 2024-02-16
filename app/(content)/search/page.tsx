import SearchBanner from "@/components/(banner)/search-banner";
import CarsFeed from "@/components/(cars feed)/cars-feed";
import CarsSkeletonFeed from "@/components/(cars feed)/cars-skeleton-feed";
import CarTypeFeedSkeleton from "@/components/(cars type feed)/car-type-feed-skeleton";
import Filter from "@/components/(filter)/filter";
import FilterSlidebar from "@/components/(filter)/filter-slidebar";
import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";
import { setDefaultSearchParams } from "@/lib/utils";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  setDefaultSearchParams(searchParams);

  const brand = searchParams.brand;
  const carType = searchParams.carType;
  const seats = searchParams.seats;
  const doors = searchParams.doors;
  const electric = searchParams.electric;

  return (
    <div>
      <SearchBanner />

      <section className="min-h-[800px] container pb-24">
        {/* Search component */}
        <div className="-mt-16">
          <SearchComponentServerWrapper searchParams={searchParams} />
        </div>

        {/* Filter sheet */}
        <div className="mt-24">
          <FilterSlidebar>
            <Filter searchParams={searchParams} noBorder />
          </FilterSlidebar>
        </div>

    
        {/* Filter and cars */}
        <div className="flex gap-8 xl:mt-12 mt-8">
          <div className="w-[250px] hidden lg:block">
            <Filter searchParams={searchParams} />
          </div>
          <div className=" flex-1">
            <Suspense
              key={JSON.stringify(searchParams)}
              fallback={<CarsSkeletonFeed />}
            >
              <CarsFeed searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
