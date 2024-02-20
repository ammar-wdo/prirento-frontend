import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const SectionWrapper = ({ title, children }: Props) => {
  return (
    <article className="p-6 border rounded-xl pb-8">
      <h3 className="capitalize text-3xl font-bold">{title}</h3>
      <div className="flex flex-col gap-4 w-full mt-6">{children}</div>
    </article>
  );
};

export default SectionWrapper;
