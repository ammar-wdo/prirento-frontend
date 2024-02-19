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


  if(!availableSuccess) return <div className='flex items-center justify-center'><ErrorComponent description={availableError as string}/></div>


  return (
    <div>
      <section className='mt-24 container'>
{availability.availability.isAvailable && 'available'}
{" "}
{res.car.carName}
      </section>
    </div>
  )
}

export default page