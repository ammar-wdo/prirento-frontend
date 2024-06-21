import { pushSearchParams } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export type Filters = {
  brand: string[] | string | undefined;
  carType: string[] | string | undefined;
  seats: string[] | string | undefined;
  doors: string[] | string | undefined;
  electric: string[] | string | undefined;
};
export type FilterQuery = "brand" | "carType" | "seats" | "doors" | "electric";

export const useFilter = (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  const [pending, startTransition] = useTransition();
  const [pendingReset, startTransitionReset] = useTransition();
  const parseInitialValue = (value: string | string[] | undefined) => {
    // If the value is already an array, return it directly.
    if (Array.isArray(value)) return value;
    // If the value is a string and contains commas, split it into an array.
    if (typeof value === "string" && value.includes(","))
      return value.split(",");
    // Return the value as an array if it's a non-empty string, otherwise undefined.
    return value ? [value] : undefined;
  };

  const initialValue = {
    brand: parseInitialValue(searchParams.brand),
    carType: parseInitialValue(searchParams.carType),
    seats: parseInitialValue(searchParams.seats),
    doors: parseInitialValue(searchParams.doors),
    electric: parseInitialValue(searchParams.electric),
  };

  const [filters, setFilters] = useState<Filters>(initialValue);
  const [notMounted, setNotMounted] = useState(true);

  const handleFilterChange = (
    category: FilterQuery,
    value: string,
    isChecked: boolean
  ) => {
    const theFilter = filters;
    const currentFilter = theFilter[category];

    let updatedCurrentFilter;
    if (Array.isArray(currentFilter)) {
      updatedCurrentFilter = isChecked
        ? currentFilter.filter((val) => val !== value)
        : [...currentFilter, value];
    } else if (typeof currentFilter === "string") {
      updatedCurrentFilter = [currentFilter, ...value.split(",")];
    } else {
      updatedCurrentFilter = [...value.split(",")];
    }
    const updatedFilter = { ...filters, [category]: updatedCurrentFilter };

    setFilters(updatedFilter);
  };

  //auto filter
  // useEffect(() => {

  //   if(notMounted){
  //       return setNotMounted(false)
  //   }

  //   const url = pushSearchParams(filters,`${process.env.NEXT_PUBLIC_BASE_URL}/search`,searchParams)
  // startTransition(()=> router.push(url,{scroll:false}))

  // }, [filters]);

  useEffect(() => {
    if (notMounted) {
      return setNotMounted(false);
    }
    const updatedFilters = {
      brand: parseInitialValue(searchParams.brand),
      carType: parseInitialValue(searchParams.carType),
      seats: parseInitialValue(searchParams.seats),
      doors: parseInitialValue(searchParams.doors),
      electric: parseInitialValue(searchParams.electric),
    };

    setFilters(updatedFilters);
  }, [searchParams]);

  const [seeMore, setSeeMore] = useState(false);
  const router = useRouter();

  const calculateActiveFilters = () => {
    return Object.values(filters).reduce((acc, filter) => {
      if (Array.isArray(filter)) {
        return acc + filter.length;
      }
      if (typeof filter === "string" && filter.length > 0) {
        return acc + 1;
      }
      return acc;
    }, 0);
  };

  const activeFiltersCount = calculateActiveFilters();

  const handlePush = () => {
    const url = pushSearchParams(
      filters,
      `${process.env.NEXT_PUBLIC_BASE_URL}/search`,
      searchParams
    );
    startTransition(() => router.push(url, { scroll: false }));
  };

  const handleReset = () => {
    startTransitionReset(() =>
      router.push(
        `${process.env.NEXT_PUBLIC_BASE_URL}/search?startDate=${
          searchParams.startDate
        }&endDate=${searchParams.endDate}&startTime=${
          searchParams.startTime
        }&endTime=${searchParams.endTime}&location=${searchParams.location}${
          !!searchParams.dropOffLocation &&
          `&dropOffLocation=${searchParams.dropOffLocation}`
        }`
      )
    );
  };

  return {
    seeMore,
    setSeeMore,
    handleFilterChange,
    filters,
    pending,
    activeFiltersCount,
    handlePush,
    handleReset,
    pendingReset,
  };
};
