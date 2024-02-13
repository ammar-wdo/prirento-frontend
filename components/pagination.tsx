"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { pushSearchParams } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  page: string;
  count: number;
  searchParams: { [key: string]: string | string[] | undefined };
};

const Pagination = ({ page, count, searchParams }: Props) => {
  const pathname = usePathname();

  return (
    <div className="w-full flex items-center justify-between">
      <Button asChild variant={"siteMain"}>
        <Link
          href={pushSearchParams(
            { page: (+page - 1).toString() },
            `${process.env.NEXT_PUBLIC_BASE_URL}/${pathname}`,
            searchParams
          )}
        >
          Back
        </Link>
      </Button>
      <Button asChild variant={"siteMain"}>
        <Link
          href={pushSearchParams(
            { page: (+page + 1).toString() },
            `${process.env.NEXT_PUBLIC_BASE_URL}/${pathname}`,
            searchParams
          )}
        >
          Next
        </Link>
      </Button>
    </div>
  );
};

export default Pagination;
