// components/Accordion.tsx
"use client";
import React, { useState, FC, ReactNode } from "react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

const AccordionItem: FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black font-semibold hover:text-purple-600">
          {title}
        </span>
        <span className="text-gray-600">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#301534"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                fill="#AD28EB"
                d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
              />
            </svg>
          )}
        </span>
      </button>
      {isOpen && <div className="pb-5 px-6">{children}</div>}
    </div>
  );
};

export default AccordionItem;
