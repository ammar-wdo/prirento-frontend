import BlogFeed from '@/components/(blog)/blog-feed'
import ContentBanner from '@/components/(content banner)/content-banner'
import MetriCool from '@/components/metricool-component'
import { Metadata } from 'next'
import React from 'react'

type Props = {}

export const revalidate = 86400


export const metadata: Metadata = {
  title: "PRIRENTO - Blogs - UAE",
  description:
    "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
  openGraph: {
    title: "PRIRENTO - Blogs - UAE",
    description:
      "Descover the most luxorious car rental service in UAE, get hustle free experience, 24/7 support,money back guarantee, no fees, full  protection. ",
      
      images:['/banner.png']
  },
};

const page = (props: Props) => {
  return (
    <div className='min-h-[900px] '>
<ContentBanner title='Blog'/>
<section className='container mt-12'>
  <h1 className='font-semibold capitalize'>Latest Blogs</h1>


<div className='mt-4'>
  <BlogFeed/>
  </div>

</section>
<MetriCool/>

    </div>
  )
}

export default page