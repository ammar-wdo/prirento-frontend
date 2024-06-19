import { fetcher } from "@/lib/utils";
import { GET_BLOGS } from "@/links";
import { Blog, BlogCardType, BlogCategory } from "@/types";
import React from "react";
import ErrorComponent from "../error-component";
import NoResult from "../no-result";
import Image from "next/image";
import BlogCard from "./blog-card";
import Link from "next/link";
import { Button } from "../ui/button";
import BlogsClientCotroller from "./blogs-client-controller";

type Props = {};

const BlogFeed = async (props: Props) => {
  const res = await fetcher<{
    success: boolean;
    error?: string;
    blogs: BlogCardType[];
    categories:BlogCategory[]
  }>(GET_BLOGS);

  if (!res.success)
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <ErrorComponent description={res.error as string} />
      </div>
    );

  const { blogs, categories } = res;


  return (
    <div className="pb-12">
    <BlogsClientCotroller categories={categories} blogs={blogs}/>
    </div>
  );
};

export default BlogFeed;
