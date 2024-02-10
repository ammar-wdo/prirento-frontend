import { LocationType } from "@/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
  location: string;
  setLocation: (val: string) => void;
  locations: LocationType[];
  dropOff?:boolean
};

const LocationPicker = ({
  open,
  setLocation,
  setOpen,
  location,
  locations,
  dropOff
}: Props) => {
  const locationPlaceholder = location
    ? locations.find((locationElement) => locationElement.id === location)?.name
    : dropOff ? "Drop-off location" : "Pick-up location";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="w-full text-start p-2 hover:bg-muted transition rounded-md">{locationPlaceholder}</PopoverTrigger>
      <PopoverContent className=" p-2">
        <ScrollArea className="max-h-[350px] "> 
        <div className="flex flex-col gap-1  ">
        {locations.map((element) => (
          <Button key={element.id} onClick={() => setLocation(element.id)} variant={"ghost"}>
            {element.name}
          </Button>
        ))}
        </div>
        </ScrollArea>
      
      </PopoverContent>
    </Popover>
  );
};

export default LocationPicker;
