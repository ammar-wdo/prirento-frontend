import React from 'react'

type Props = {
  brand?:string | string[] | undefined
  carName?:string
}

const SearchBanner = ({brand,carName}: Props) => {
  let content
  if(Array.isArray(brand) && !!brand.length){
    content = brand.join(', ')
  }else if(typeof brand ==='string'){
    content = brand
  }else {
    content = "All Cars"
  }
  return (
    <div className='bg-main text-white flex py-20 justify-center h-[250px]'>
        <h3 className='text-xl font-bold md:text-3xl lg:text-5xl capitalize container text-center'>{carName || content}</h3>
  
    </div>
  )
}

export default SearchBanner