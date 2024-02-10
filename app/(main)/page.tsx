import Banner from "@/components/(banner)/banner";
import BrandsSwiperServerWrapeer from "@/components/(brands swiper)/brands-swiper-server-wrapper";

import SearchComponentServerWrapper from "@/components/(search-component)/seatch-component-server-wrapper";



export const revalidate = 0

export default function Home() {
  return (
   <div className="">
 <Banner/>

 <div className="container -mt-[3rem]">
 <SearchComponentServerWrapper/>
 </div>

 <div className="container mt-12">
  <BrandsSwiperServerWrapeer/>
 </div>
   </div>
  );
}
