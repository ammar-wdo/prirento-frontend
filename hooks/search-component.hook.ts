'use client'
import { convertDateToISOString } from "@/lib/utils";
import { useEffect, useState } from "react";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

  
export const useSearchComponent = (searchParams:{[key:string]:string | string[] | undefined} | undefined,urlVar?:string) => {
 
  const [location, setLocation] = useState(searchParams?.location as string || "");
  const [locationOpen, setLocationOpen] = useState(false);

  const [dropOffLocation, setDropOffLocation] = useState(
    searchParams?.dropOffLocation as string || ""
  );
  const [dropOffOpen, setDropOffOpen] = useState(false);

  const [startDate, setStartDate] = useState<string | undefined>(
    searchParams?.startDate as string || ""
  );
  const [endDate, setEndDate] = useState<string | undefined>(
    searchParams?.endDate as string || ""
  );
  const [startTime, setStartTime] = useState<string | undefined>(
    searchParams?.startTime as string || ""
  );
  const [endTime, setEndTime] = useState<string | undefined>(
    searchParams?.endTime as string || ""
  );

  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endtDateOpen, setEndDateOpen] = useState(false);
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endtTimeOpen, setEndTimeOpen] = useState(false);

  const [isDropOff, setisDropOff] = useState(
    !!searchParams?.dropOffLocation || false
  );

  useEffect(() => {
    if (isDropOff === false) {
      setDropOffLocation("");
      delete searchParams?.dropOffLocation
    }
  }, [isDropOff]);

  useEffect(() => {
    if (!location) return;
    if (!startDate) {
      setStartDateOpen(true);
    } else if (!startTime) {
      setStartTimeOpen(true);
    } else if (isDropOff && !dropOffLocation) {
      setDropOffOpen(true);
    } else if (!endDate) {
      setEndDateOpen(true);
    } else if (!endTime) {
      setEndTimeOpen(true);
    }
  }, [location]);

  useEffect(() => {
    if (!startDate) return;
    if (!location) {
      setLocationOpen(true);
    } else if (!startTime) {
      setStartTimeOpen(true);
    } else if (isDropOff && !dropOffLocation) {
      setDropOffOpen(true);
    } else if (!endDate) {
      setEndDateOpen(true);
    } else if (!endTime) {
      setEndTimeOpen(true);
    }
  }, [startDate]);

  useEffect(() => {
    if (!startTime) return;
    if (!location) {
      setLocationOpen(true);
    } else if (!startDate) {
      setStartDateOpen(true);
    } else if (isDropOff && !dropOffLocation) {
      setDropOffOpen(true);
    } else if (!endDate) {
      setEndDateOpen(true);
    } else if (!endTime) {
      setEndTimeOpen(true);
    }
  }, [startTime]);

  useEffect(() => {
    if (!dropOffLocation) return;
    if (!location) {
      setLocationOpen(true);
    } else if (!startDate) {
      setStartDateOpen(true);
    } else if (!startTime) {
      setStartTimeOpen(true);
    } else if (!endDate) {
      setEndDateOpen(true);
    } else if (!endTime) {
      setEndTimeOpen(true);
    }
  }, [dropOffLocation]);

  useEffect(() => {
    if (!endDate) return;
    if (!location) {
      setLocationOpen(true);
    } else if (!startDate) {
      setStartDateOpen(true);
    } else if (!startTime) {
      setStartTimeOpen(true);
    } else if (isDropOff && !dropOffLocation) {
      setDropOffOpen(true);
    } else if (!endTime) {
      setEndTimeOpen(true);
    }
  }, [endDate]);

  useEffect(() => {
    if (!endTime) return;
    if (!location) {
      setLocationOpen(true);
    } else if (!startDate) {
      setStartDateOpen(true);
    } else if (!startTime) {
      setStartTimeOpen(true);
    } else if (isDropOff && !dropOffLocation) {
      setDropOffOpen(true);
    } else if (!endDate) {
      setEndDateOpen(true);
    }
  }, [endTime]);

  const startDateSetter = (date: Date | undefined) => {
    const dateString = convertDateToISOString(date);

    setStartDate(dateString);
    setStartDateOpen(false);
  };
  const endDateSetter = (date: Date | undefined) => {
    const dateString = convertDateToISOString(date);
    setEndDate(dateString);
    setEndDateOpen(false);
  };

  const startTimeSetter = (val: string) => {
    setStartTime(val);
    setStartTimeOpen(false);
  };
  const endTimeSetter = (val: string) => {
    setEndTime(val);
    setEndTimeOpen(false);
  };

  const locationOpenSetter = (val: boolean) => {
    setLocationOpen(val);
  };

  const locationsSetter = (val: string) => {
    setLocation(val);
    setLocationOpen(false);
  };

  const dropOffOpenSetter = (val: boolean) => {
    setDropOffOpen(val);
  };
  const dropOffsetter = (val: string) => {
    setDropOffLocation(val);
    setDropOffOpen(false);
  };
  const startDateOpenSetter = (val: boolean) => {
    setStartDateOpen(val);
  };
  const startTimeOpenSetter = (val: boolean) => {
    setStartTimeOpen(val);
  };
  const endTimeOpenSetter = (val: boolean) => {
    setEndTimeOpen(val);
  };
  const endDateOpenSetter = (val: boolean) => {
    setEndDateOpen(val);
  };

  const isDropOffToggle = () => {
    setisDropOff((val) => !val);
  };

  const router = useRouter();
  const searchPush = () => {
    if (!location) {
      setLocationOpen(true);
    } else if (!startDate) {
      setStartDateOpen(true);
    } else if (!startTime) {
      setStartTimeOpen(true);
    } else if (isDropOff && !dropOffLocation) {
      setDropOffOpen(true);
    } else if (!endDate) {
      setEndDateOpen(true);
    } else if (!endTime) {
      setEndTimeOpen(true);
    } else {


      const url = qs.stringifyUrl({
        url: urlVar ?  `/${urlVar }` :  "/search",
        query: {
         ... searchParams,
          location,
          startDate,
          startTime,
          endDate,
          endTime,
          ...(isDropOff && { dropOffLocation }),
        },
      });

      router.push(url);
    }
  };

  return {
    startDateSetter,
    endDateSetter,
    startTimeSetter,
    endTimeSetter,
    locationOpenSetter,
    location,
    locationOpen,
    locationsSetter,
    dropOffLocation,
    dropOffOpen,
    dropOffOpenSetter,
    dropOffsetter,
    startDateOpenSetter,
    endDateOpenSetter,
    startTimeOpenSetter,
    endTimeOpenSetter,
    isDropOff,
    isDropOffToggle,
    startDateOpen,
    endtDateOpen,
    startTimeOpen,
    endtTimeOpen,
    startDate,
    endDate,
    startTime,
    endTime,
    searchPush,
  };
};
