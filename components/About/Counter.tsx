"use client";

import React from "react";
import CountUp from "react-countup";

type Props = {};

export default function Counter({}: Props) {
  return (
    <>
      <div className="flex flex-wrap gap-[40px] max-w-[461px] flex-grow ">
        {/* experience */}
        <div className="counter_items">
          <h3 className="text-[30px] xl:text-[40px] font-semibold text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] xl:leading-[.9em] ">
            <CountUp start={0} end={2} />+
          </h3>
          <p className="text-base font-normal text-[#576076] leading-[1.5em] mt-2 ">
            Year of Experience
          </p>
        </div>

        {/* project */}
        <div className="counter_items">
          <h3 className="text-[30px] xl:text-[40px] font-semibold text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] xl:leading-[.9em] ">
            <CountUp start={0} end={7} />+
          </h3>
          <p className="text-base font-normal text-[#576076] leading-[1.5em] mt-2 ">
            Project Completed
          </p>
        </div>
        {/* client */}
        <div className="counter_items">
          <h3 className="text-[30px] xl:text-[40px] font-semibold text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] xl:leading-[.9em] ">
            <CountUp start={0} end={5} />+
          </h3>
          <p className="text-base font-normal text-[#576076] leading-[1.5em] mt-2 ">
            Happy Client
          </p>
        </div>
      </div>
    </>
  );
}
