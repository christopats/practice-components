// components/AccordionWrapper.tsx
"use client";
import React, { FC } from "react";
import Accordion from "./Accordion";

type AccordionWrapperProps = {
  items: {
    title: string;
    content: string;
  }[];
};

const AccordionWrapper: FC<AccordionWrapperProps> = ({ items }) => {
  return (
    <div className="bg-white w-96 mx-auto rounded-lg overflow-hidden">
      {items.map((item, index) => (
        <Accordion key={index} title={item.title}>
          <p>{item.content}</p>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionWrapper;
