import { convertDateToISOString } from "@/lib/utils";
import { useState } from "react";

export const useSearchComponent = () => {
  const [location, setLocation] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);

  const [dropOffLocation, setDropOffLocation] = useState("");
  const [dropOffOpen, setDropOffOpen] = useState(false);

  const [startDate, setStartDate] = useState<string | undefined>("");
  const [endDate, setEndDate] = useState<string | undefined>("");
  const [startTime, setStartTime] = useState<string | undefined>("");
  const [endTime, setEndTime] = useState<string | undefined>("");

  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endtDateOpen, setEndDateOpen] = useState(false);
  const [startTimeOpen, setStartTimeOpen] = useState(false);
  const [endtTimeOpen, setEndTimeOpen] = useState(false);

  const [isDropOff, setisDropOff] = useState(false);



const startDateSetter = (date:Date | undefined)=>{
    
    const dateString = convertDateToISOString(date)
    
    setStartDate(dateString)
    setStartDateOpen(false)
}
const endDateSetter = (date:Date | undefined)=>{
    const dateString = convertDateToISOString(date)
    setEndDate(dateString)
    setEndDateOpen(false)
}


const startTimeSetter = (val:string)=>{
    setStartTime(val)
    setStartTimeOpen(false)
}
const endTimeSetter = (val:string)=>{
    setEndTime(val)
    setEndTimeOpen(false)
}

  const locationOpenSetter = (val: boolean) => {
    setLocationOpen(val);
  };

  const dropOffOpenSetter = (val: boolean) => {
    setDropOffOpen(val);
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

  return {
    startDateSetter,
    endDateSetter,
    startTimeSetter,
    endTimeSetter,
    locationOpenSetter,
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
  };
};
