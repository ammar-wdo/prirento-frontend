"use client";

import { BlogCardType, BlogCategory } from "@/types";
import React, { useMemo, useState } from "react";
import { Button } from "../ui/button";
import NoResult from "../no-result";
import Link from "next/link";
import BlogCard from "./blog-card";
import { cn } from "@/lib/utils";

type Props = {
  blogs: BlogCardType[];
  categories: BlogCategory[];
};

const BlogsClientCotroller = ({ blogs, categories }: Props) => {
  const [categorySelected, setCategorySelected] = useState<string | undefined>(
    undefined
  );
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      !categorySelected ? true : blog.categoryId === categorySelected
    );
  }, [blogs, categorySelected]);
  const [pageNumber, setPageNumber] = useState(1);
  const maximumLength = 8;
  const pagesNumber = Math.ceil(filteredBlogs.length / maximumLength);

  const paginatedBlogs = useMemo(() => {
    const startIndex = (pageNumber - 1) * maximumLength;
    const endIndex = startIndex + maximumLength;
    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, pageNumber, maximumLength]);

  return (
    <div>
      <div className="mb-12 flex items-center gap-4 overflow-x-auto pb-4">
        <Button
                className={cn(categorySelected !== undefined && "bg-muted text-black")}
          onClick={() => {
            setCategorySelected(undefined);
            setPageNumber(1);
          }}
          variant={categorySelected !== undefined? "ghost":"siteMain"}
       
        >
          All
        </Button>
        {categories.map((cat) => (
          <Button
           className={cn(categorySelected !== cat.id && "bg-muted text-black")}
            onClick={() => {
              setCategorySelected(cat.id);
              setPageNumber(1);
            }}
            key={cat.id}
            variant={categorySelected !== cat.id? "ghost":"siteMain"}
          >
            {cat.label}
          </Button>
        ))}
      </div>
      {!blogs.length && <NoResult />}
      {!!blogs.length && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-3">
          {paginatedBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`}>
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between mt-12">
        <Button
          variant={"siteMain"}
          onClick={() => setPageNumber((prev) => prev - 1)}
          className={cn(pageNumber === 1 && "opacity-0 pointer-events-none")}
        >
          Back
        </Button>
        <p>
          {pageNumber}/{pagesNumber}
        </p>
        <Button
          variant={"siteMain"}
          onClick={() => setPageNumber((prev) => prev + 1)}
          className={cn(
            pageNumber === pagesNumber && "opacity-0 pointer-events-none"
          )}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BlogsClientCotroller;
