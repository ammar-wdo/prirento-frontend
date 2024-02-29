"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = {
  reviewContent: string;
};

const ReviewSlicer = ({ reviewContent }: Props) => {
  const [slice, setSlice] = useState(true);
  return (
    <div>
      {!!(reviewContent.length > 100 )? (
        <p>
          {" "}
          {slice ? reviewContent?.slice(0, 100) : reviewContent}
          {slice ? (
            <Button
              onClick={() => setSlice(false)}
              className="p-0 ml-1 h-auto "
              variant={"link"}
            >
              ...See More
            </Button>
          ) : (
            <Button
              className="p-0 ml-1 h-auto"
              onClick={() => setSlice(true)}
              variant={"link"}
            >
              ...See Less
            </Button>
          )}
          
        </p>
      ) : (
        <p>{reviewContent}</p>
      )}
    </div>
  );
};

export default ReviewSlicer;
