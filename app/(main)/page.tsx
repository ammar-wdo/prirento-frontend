import Banner from "@/components/banner";
import SearchComponent from "@/components/search-component";
import { Loader } from "lucide-react";


export const revalidate = 0

export default function Home() {
  return (
   <div className="">
 <Banner/>
 <div className="container -mt-[3rem]">
 <SearchComponent/>
 </div>
 
  
   </div>
  );
}
