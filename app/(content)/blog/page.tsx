import BlogFeed from '@/components/(blog)/blog-feed'
import ContentBanner from '@/components/(content banner)/content-banner'
import React from 'react'

type Props = {}

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
    </div>
  )
}

export default page