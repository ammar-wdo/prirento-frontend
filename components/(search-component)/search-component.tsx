"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchComponent } from "@/app/hooks/search-component.hook";
import { Checkbox } from "../ui/checkbox";
import DatepickerComponent from "../date-picker-component";
import TimePickerComponent from "../time-picker-component";
import { LocationType } from "@/types";
import LocationPicker from "../location-picker";

type Props = {
  locations: LocationType[];
};

const SearchComponent = ({ locations }: Props) => {
  const {
    startDateSetter,
    endDateSetter,
    endDateOpenSetter,
    endTimeOpenSetter,
    locationOpenSetter,
    location,
    locationOpen,
    locationsSetter,
    dropOffLocation,
    dropOffOpen,
    dropOffOpenSetter,
    dropOffsetter,
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

        {/* pick up location */}
        <div className="flex-1 flex flex-col gap-1">
          <p>Pick-up location</p>
          <div className="flex-1 flex  p-1 rounded-md border bg-white">
            <LocationPicker
              open={locationOpen}
              setOpen={locationOpenSetter}
              location={location}
              setLocation={locationsSetter}
              locations={locations}
            />
          </div>
        </div>

        {/* Pick up date */}

        <div className="flex-1 flex flex-col gap-1">
          <p>Pick-up date</p>
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
        </div>

        {isDropOff && (
           <div className="flex-1 flex flex-col gap-1">
          <p>Drop-off location</p>
          <div className="flex-1 flex  p-1 rounded-md border bg-white">
            <LocationPicker
              open={dropOffOpen}
              setOpen={dropOffOpenSetter}
              location={dropOffLocation}
              setLocation={dropOffsetter}
              locations={locations}
              dropOff
            />
          </div>
        </div>
        )}

        {/* Drop off date date */}
        <div className="flex-1 flex flex-col gap-1">
          <p>Drop-off date</p>
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
        </div>

        <Button
          variant={"siteMain"}
          className="rounded-full py-[28px] px-8 font-medium text-base self-end"
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
