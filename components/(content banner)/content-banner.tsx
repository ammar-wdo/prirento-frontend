import React from 'react'

type Props = {
    title:string
}

const ContentBanner = ({title}: Props) => {
  return (

         <div className='bg-main text-white flex py-20 justify-center items-center h-[250px]'>
        <h3 className='text-xl font-bold md:text-3xl lg:text-5xl capitalize container text-center'>{title}</h3>
  
    </div>
    
  )
}

export default ContentBanner