import { BrandType } from '@/types'
import React from 'react'
import BrandNavCard from './brand-nav-card'

type Props = {
    mobile?:boolean,
    title:string,
    data:BrandType[]
}

const NavItemsMenu = ({mobile,title,data}: Props) => {
  return (
    <div className='grid grid-cols-4 gap-4 p-4 '>
{data.map(brand=><BrandNavCard key={brand.id} brand={brand}/>)}
    </div>
  )
}

export default NavItemsMenu