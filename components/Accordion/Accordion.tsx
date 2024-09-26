"use client";

import Image from "next/image";
import React, { useState } from "react";
import plus from "@/public/images/plus.png";
import minus from "@/public/images/minus.png";
import { accordion } from "@/data/Accordion.tsx";

type Props = {};

export default function Accordion({}: Props) {
  // Set the first accordion (id: 1) as open by default
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  // Toggle function to open or close a specific accordion
  const toggleAccordion = (id: number) => {
    // Toggle the accordion (if it's already open, close it by setting to null)
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <>
      {accordion.map((acc) => {
        const isOpen = openAccordion === acc.id;
        return (
          <div
            key={acc.id}
            className={`my-4 border border-[#dbdfe5] dark:border-[#0e1018] rounded-lg transition-colors duration-300 ${
              isOpen ? "bg-white dark:bg-black" : ""
            }`}
          >
            <h4 className="accordionHeader">
              <button
                className={`text-lg leading-[1.5em] py-5 px-6 font-medium rounded-lg flex items-center justify-between transition-colors duration-300 w-full text-left ${
                  isOpen
                    ? "text-[#4770ff] dark:text-[#4770ff] bg-white dark:bg-black"
                    : "text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] bg-[#f0f2f5] dark:bg-[#0e1018]"
                }`}
                onClick={() => toggleAccordion(acc.id)}
              >
                {acc.title}
                <span className="inline-block ml-auto ">
                  <span
                    className={`w-8 h-8 rounded flex items-center justify-center ml-6 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#F0F2F5] dark:bg-[#0E1018]"
                        : "bg-white dark:bg-black"
                    }`}
                  >
                    {isOpen ? (
                      <Image src={minus} alt="minus" />
                    ) : (
                      <Image src={plus} alt="plus" />
                    )}
                  </span>
                </span>
              </button>
            </h4>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pt-0 pr-6 pb-6 pl-6">
                <p className="text-base font-normal leading-[1.5em] text-[#1a1f2c] dark:text-[#f0f2f5] ">
                  {acc.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
