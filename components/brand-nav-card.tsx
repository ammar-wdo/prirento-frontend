import { BrandType } from '@/types'
import {
    Card,
    CardContent,
  
    CardFooter,
   
  } from "@/components/ui/card"
import Image from 'next/image'

type Props = {
    brand:BrandType
}

const BrandNavCard = ({brand}: Props) => {
  return (
<Card className='border-0  shadow-none justify-self-center p-4 hover:bg-main transition group rounded-xl w-full hover:scale-105 cursor-pointer'>

  <CardContent className='p-0'>
<div className='w-[50px] h-[50px] relative mx-auto'>
    <Image src={brand.logo} fill alt='logo' className='object-contain'/>

</div>
  </CardContent>
  <CardFooter className='text-center capitalize text-sm font-medium p-0 mt-2 justify-center group-hover:text-white'><span>{brand.brand}</span></CardFooter>

</Card>
  )
}

export default BrandNavCard