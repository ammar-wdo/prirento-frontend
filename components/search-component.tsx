"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useSearchComponent } from "@/app/hooks/search-component.hook";
import { Checkbox } from "./ui/checkbox";
import DatepickerComponent from "./date-picker-component";
import TimePickerComponent from "./time-picker-component";

type Props = {};

const SearchComponent = (props: Props) => {
  const {
    startDateSetter,
    endDateSetter,
    endDateOpenSetter,
    endTimeOpenSetter,
    locationOpenSetter,
    startDateOpenSetter,
    startTimeOpenSetter,
    startDate,
    startTime,
    endDate,
    endTime,
    startDateOpen,
    startTimeOpen,
    endtDateOpen,
    endtTimeOpen,
    startTimeSetter,
    endTimeSetter,

    isDropOff,

    isDropOffToggle,
  } = useSearchComponent();

  return (
    <div className="space-y-4 p-8 bg-white/90   backdrop-blur-lg rounded-xl drop-shadow-xl">
      <div className="  flex items-center gap-4">
        <div className="flex-1">1</div>
        <div className="flex-1 flex  p-1 rounded-md border bg-white">
          <DatepickerComponent
            open={startDateOpen}
            setOpen={startDateOpenSetter}
            dateString={startDate}
            setDateString={startDateSetter}
          />
          <TimePickerComponent
            open={startTimeOpen}
            setOpen={startTimeOpenSetter}
            setTime={startTimeSetter}
            time={startTime}
          />
        </div>
        {isDropOff && <div className="flex-1">3</div>}
        <div className="flex-1 flex   p-1 rounded-md border bg-white">
          {" "}
          <DatepickerComponent
            open={endtDateOpen}
            setOpen={endDateOpenSetter}
            dateString={endDate}
            setDateString={endDateSetter}
            startDateString={startDate}
          />

<TimePickerComponent
            open={endtTimeOpen}
            setOpen={endTimeOpenSetter}
            setTime={endTimeSetter}
            time={endTime}
          />
        </div>
        <Button
          variant={"siteMain"}
          className="rounded-full py-[28px] px-8 font-medium text-base"
        >
          Find a vehicle <ArrowRight className="w-4 h-4 ml-2 " />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="dropOff"
          checked={isDropOff}
          onCheckedChange={isDropOffToggle}
        />
        <label
          htmlFor="dropOff"
          className="text-base  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Drop car off at different location
        </label>
      </div>
    </div>
  );
};

export default SearchComponent;
