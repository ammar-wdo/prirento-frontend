"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { generateHourlyTimes } from "@/lib/utils";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Clock } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  time: string | undefined;
  setTime: (val: string) => void;
};

const TimePickerComponent = ({ open, setOpen, time, setTime }: Props) => {
  const times = generateHourlyTimes();
  return (
    <Popover open={open} onOpenChange={setOpen} >
      <PopoverTrigger className="px-2 flex-1 hover:bg-muted transition flex items-center  bg-white  rounded-md shrink-0 text-sm">
       <Clock className="w-4 h-4 mr-2 shrink-0"/> {time || "Choose time"}
      </PopoverTrigger>
      <PopoverContent className="w-fit ">
        <ScrollArea className="w-fit h-[400px]">
          <div className="w-fit flex items-center flex-col px-4">
            {times.map((time) => (
              <Button
                variant={"ghost"}
                onClick={() => setTime(time)}
                key={time}
              >
                {time}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default TimePickerComponent;
