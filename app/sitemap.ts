import { fetcher } from '@/lib/utils';
import { GET_BLOGS, GET_CARS_SEO, GET_COMPANIES } from '@/links';
import { BlogCardType, CarCardType } from '@/types';
import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


   // blogs slugs
    const blogsRes = await fetcher<{success:boolean,blogs:BlogCardType[]}>(GET_BLOGS);
    const blogsSlugs: MetadataRoute.Sitemap = (blogsRes.blogs).map(
      (blog) => ({ url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.slug}` })
    );

// //cars slugs
    const carsRes = await fetcher<{success:boolean,cars:{id:string,slug:string,company:{slug:string}}[]}>(GET_CARS_SEO)
    const carsSlugs:MetadataRoute.Sitemap = carsRes.cars.map(car=>({url:`${process.env.NEXT_PUBLIC_BASE_URL}/${car.company.slug}/${car.slug}`}))


// //companies slugs
    const companiesRes = await fetcher<{success:boolean,companies:{id:string,slug:string}[]}>(GET_COMPANIES)
    const companiesSlugs:MetadataRoute.Sitemap = companiesRes.companies.map(company=>({url:`${process.env.NEXT_PUBLIC_BASE_URL}/${company.slug}`}))





  return [
    ...blogsSlugs,
    ...carsSlugs,
    ...companiesSlugs,
    { url: process.env.NEXT_PUBLIC_BASE_URL as string },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/search` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/faq` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/leave-review` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-and-conditions` },
  ]
}