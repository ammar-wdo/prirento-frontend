import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Blog, BlogCardType } from "@/types";
import Image from "next/image";

type Props = {
    blog:BlogCardType
};

const BlogCard = ({blog}: Props) => {
  return (
    <Card className="border rounded-lg p-4 flex flex-col h-full">
      <CardContent className="p-0 mb-4">
        <div className="w-full relative aspect-square rounded-lg overflow-hidden ">
          <Image
            fill
            src={blog.featuredImage}
            alt="blog image"
            className="object-cover"
          />
        </div>
        <div className="mt-6 border-t pt-3">
        <p className=" px-4 py-2  rounded-lg bg-muted capitalize text-sm w-fit">
            {blog.category.label}
        </p>
        <p className="font-medium mt-2 first-letter:capitalize">{blog.shortDescription}</p>
        </div>
   
      </CardContent>
      <CardFooter className="p-0 px-0 pb-0 mt-auto">
<div className="flex items-center gap-4 ">
    <p className="text-sm text-muted-foreground capitalize">{blog.author}</p>
    <p className="text-sm text-muted-foreground capitalize">{formatDate(new Date(blog.createdAt))}</p>
</div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
