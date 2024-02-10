
import CarsTypeComponent from "./cars-type-component";

import CarTypeList from "./car-type-list";


type Props = {
  searchParams: { [ket: string]: string | string[] | undefined };
};

const CarsTypeFeed = async ({ searchParams }: Props) => {
  return (
  
      <div className="container">
       
        <div className="mt-8 overflow-auto">
          <CarsTypeComponent searchParams={searchParams} />
        </div>

        <CarTypeList query={searchParams.carType as string} />
      </div>
 
  );
};

export default CarsTypeFeed;
