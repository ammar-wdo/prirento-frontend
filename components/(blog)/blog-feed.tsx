import { fetcher } from "@/lib/utils";
import { GET_BLOGS } from "@/links";
import { Blog, BlogCardType } from "@/types";
import React from "react";
import ErrorComponent from "../error-component";
import NoResult from "../no-result";
import Image from "next/image";
import BlogCard from "./blog-card";
import Link from "next/link";

type Props = {};

const BlogFeed = async (props: Props) => {
  const res = await fetcher<{
    success: boolean;
    error?: string;
    blogs: BlogCardType[];
  }>(GET_BLOGS);

  if (!res.success)
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <ErrorComponent description={res.error as string} />
      </div>
    );

  const { blogs } = res;


  return (
    <div>
      {!blogs.length && <NoResult />}
      {!!blogs.length && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-3">
          {blogs.map((blog) => (
          <Link  key={blog.id} href={`/blog/${blog.slug}`} ><BlogCard blog={blog} /></Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogFeed;
