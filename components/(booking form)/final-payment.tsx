import React from 'react'

type Props = {
    title:string,
    description:string,
    value:number
}

const FinalPayment = ({title,description,value}: Props) => {
  return (
    <div className='flex justify-between'>
    <div className=''>
        <p className='font-medium text-lg capitalize'>{title}</p>
        <p className='first-letter:capitalize text-muted-foreground text-xs'>{description}</p>
    </div>
    <p className='text-3xl font-bold'>{value} AED</p>
    </div>
  )
}

export default FinalPayment