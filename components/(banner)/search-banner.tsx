import React from 'react'

type Props = {
  brand:string | string[] | undefined
}

const SearchBanner = ({brand}: Props) => {
  let content
  if(Array.isArray(brand) && !!brand.length){
    content = brand.join(', ')
  }else if(typeof brand ==='string'){
    content = brand
  }else {
    content = "All Vehicles"
  }
  return (
    <div className='bg-main text-white flex py-20 justify-center h-[250px]'>
        <h3 className='text-xl font-bold md:text-3xl lg:text-5xl capitalize container text-center'>{content}</h3>
  
    </div>
  )
}

export default SearchBanner