import ContentBanner from '@/components/(content banner)/content-banner'
import ErrorComponent from '@/components/error-component'
import { fetcher, formatDate } from '@/lib/utils'
import { GET_BLOG, GET_BLOGS } from '@/links'
import { Blog, BlogCardType } from '@/types'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import BlogCard from '@/components/(blog)/blog-card'

const Editor = dynamic(()=>import('@/components/editor'),{ssr:false})

type Props = {
    params:{blogSlug:string}
}



export const revalidate = 86400

export const generateStaticParams = async()=>{
  const res = await fetcher<{
    success: boolean;
    error?: string;
    blogs: BlogCardType[];
  }>(GET_BLOGS);



  return res.blogs.map((blog)=>({blogSlug:blog.slug}))

}

const page = async({params}: Props) => {

  const blogRes = await fetcher<{blog:Blog,success:boolean,error?:string,relatedBlogs:BlogCardType[]}>(GET_BLOG + `/${params.blogSlug}`)

  if(!blogRes.success){
    return  <div className='flex items-center justify-center min-h-[700px]'><ErrorComponent description={blogRes.error as string}/></div>
  }

  if(!blogRes.blog) notFound()

const {blog,relatedBlogs} = blogRes
  return (
    <div>
      <ContentBanner title='Blog'/>

      {/* blog container */}

      <section className='mt-12 flex flex-col w-full gap-4 container pb-12'>
<span className='px-4 py-2 rounded-lg bg-muted w-fit capitalize'>{blog.category.label}</span>

<h1 className='font-semibold text-3xl capitalize '>{blog.title}</h1>

<div className='flex items-center gap-8 text-sm text-muted-foreground'>
{blog.author && <p className='capitalize'>{blog.author}</p>}
<p>{formatDate(new Date(blog.createdAt))}</p>
</div>

<div className='relative lg:aspect-[16/5] aspect-video rounded-lg w-full overflow-hidden'>
  <div className='absolute w-full h-full bg-black/30  z-10'/>
  <Image src={blog.featuredImage} alt='blog-image' fill className='object-cover blur-sm' />
  <Image src={blog.featuredImage} alt='blog-image' fill className='object-contain z-20' />

</div>

<div className='mt-12'>
<Editor initialContent={blog.content}/>
</div>




{!!relatedBlogs.length && <div>
  
  <h3 className='font-medium text-lg'>Related blogs</h3>

  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
    {relatedBlogs.map((blogElement)=><Link key={blogElement.id} href={blogElement.slug}><BlogCard blog={blogElement} /></Link>)}

  </div>

  </div>}

      </section>



    </div>
  )
}

export default page