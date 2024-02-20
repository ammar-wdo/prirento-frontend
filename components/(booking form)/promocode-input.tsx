"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

type Props = {
  submit: (val: string) => void;
  promocode: string | undefined;
  loading: boolean;
};

const PromocodeInput = ({ submit, promocode, loading }: Props) => {
  const [text, setText] = useState("");
  return (
    <div className="flex items-stretch gap-3">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Gift or discount code"
        className="focus-visible:ring-offset-0 focus-visible:ring-0 focus:ring-0 focus:ring-transparent focus-visible:ring-transparent"
      />
      <Button
      variant={'siteMain'}
        type="button"
        disabled={!text || loading}
        onClick={() => {
          submit(text);
          setText("");
        }}
        className="self-stretch h-auto w-[150px]"
      >
        Apply {loading && <Loader className="animate-spin ml-2 w-4 h-4" />}
      </Button>
    </div>
  );
};

export default PromocodeInput;
