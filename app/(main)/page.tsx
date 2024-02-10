import Banner from "@/components/(banner)/banner";
import BrandsSwiperServerWrapeer from "@/components/(brands swiper)/brands-swiper-server-wrapper";
import CarsTypeFeed from "@/components/(cars type feed)/cars-type-feed";

import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";


 type Props ={
searchParams:{[key:string]:string | string[] | undefined}
}
export const revalidate = 0

export default function Home({searchParams}:Props) {
  if(!searchParams.carType){
    searchParams.carType ='super_cars'
  }
  return (
   <div className="">
 <Banner/>

 <div className="container xl:-mt-[3rem] -mt-[12rem]">
 <SearchComponentServerWrapper/>
 </div>

 <div className="container mt-16">
  <BrandsSwiperServerWrapeer/>
 </div>
 <div className="mt-24">
  <CarsTypeFeed searchParams={searchParams}/>
 </div>
   </div>
  );
}
