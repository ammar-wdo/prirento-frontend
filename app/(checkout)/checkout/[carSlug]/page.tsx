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
    <div>
      <section className='mt-24 container grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <BookingForm/>

      </section>
    </div>
  )
}

export default page