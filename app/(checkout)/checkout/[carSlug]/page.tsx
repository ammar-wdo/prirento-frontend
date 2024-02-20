import BookingForm from '@/components/(booking form)/booking-form';
import ErrorComponent from '@/components/error-component';
import { fetcher, searchParamsGenerate } from '@/lib/utils';
import { GET_CAR } from '@/links';
import { CarAvailabilityType, SingleCarType } from '@/types';
import React from 'react'

type Props = {
    params:{carSlug:string},
    searchParams:{[key:string]:string | string[] | undefined}
}

const page = async ({params,searchParams}: Props) => {

  const urlParams = searchParamsGenerate(searchParams);



  const {
   availability,
    success:availableSuccess,
    error:availableError
    
  } = await fetcher<{
    availability: CarAvailabilityType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug + `/check?${urlParams}`);

  const res = await fetcher<{
    car: SingleCarType;
    success: boolean;
    error?: string;
  }>(GET_CAR + "/" + params.carSlug);


  if(!availableSuccess) return <div className='flex items-center justify-center h-[calc(100vh-70px)]'><ErrorComponent description={availableError as string}/></div>


  return (
    <div className='pb-20'>
     
        <BookingForm carImage={res.car.gallary[0]} startDate={availability.startDate} endDate={availability.endDate} carName={res.car.carName}/>

      
    </div>
  )
}

export default page