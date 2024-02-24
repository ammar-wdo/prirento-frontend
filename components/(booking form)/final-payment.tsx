import React from 'react'

type Props = {
    title:string,
    description:string,
    value:number
}

const FinalPayment = ({title,description,value}: Props) => {
  return (
    <div className='flex justify-between gap-4'>
    <div className=''>
        <p className='font-medium text-lg capitalize'>{title}</p>
        <p className='first-letter:capitalize text-muted-foreground text-xs'>{description}</p>
    </div>
    <p className='lg:text-3xl font-bold text-lg shrink-0'>{value} AED</p>
    </div>
  )
}

export default FinalPayment