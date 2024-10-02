"use client";

import React from "react";
import CountUp from "react-countup";
import Card from "../Card/Card.tsx";
import Marquee from "react-fast-marquee";

type Props = {};

export default function Counter({}: Props) {
  return (
    <>
      <Card>
        <div className="hidden md:flex justify-between gap-3 items-center mt-6 p-6 ">
          <div className="flex justify-center items-center w-full gap-4 bg-myBgLight dark:bg-myBgDark px-4 rounded-md py-2">
            <h3 className="font-bold text-myBgDarkTwo dark:text-white text-6xl ">
              <CountUp start={0} end={3} />
            </h3>
            <p className="text-lg dark:text-myGray text-myBgDarkTwo ">
              Years of Experience
            </p>
          </div>

          <div className="flex w-full justify-center items-center gap-4 dark:bg-myBgDark bg-myBgLight  px-4 rounded-md py-2">
            <h3 className="font-bold text-myBgDarkTwo dark:text-white text-6xl flex ">
              <CountUp start={0} end={125} /> <span className="text-lg">+</span>
            </h3>
            <p className="text-lg dark:text-myGray text-myBgDarkTwo ">
              Project Completed
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 dark:bg-myBgDark bg-myBgLight w-full px-4 rounded-md py-2">
            <h3 className="font-bold text-myBgDarkTwo dark:text-white text-6xl flex ">
              <CountUp start={0} end={85} />
              <span className="text-lg">+</span>
            </h3>
            <p className="text-lg text-myBgDarkTwo dark:text-myGray ">
              Happy Clients
            </p>
          </div>
        </div>

        {/* marquee slide */}
        <div className="flex md:hidden justify-between gap-3 items-center mt-6 p-6">
          <Marquee direction="right">
            <div className="flex items-center gap-4 mr-3  bg-myBgLight dark:bg-myBgDark w-fit px-4 rounded-md py-2">
              <h3 className="font-bold text-myBgDarkTwo dark:text-white text-5xl sm:text-6xl ">
                <CountUp start={0} end={3} />
              </h3>
              <p className="text-lg text-myBgDarkTwo dark:text-myGray ">
                Years of Experience
              </p>
            </div>

            <div className="flex items-center gap-4 mr-3  bg-myBgLight dark:bg-myBgDark w-fit px-4 rounded-md py-2">
              <h3 className="font-bold text-myBgDarkTwo dark:text-white flex text-5xl sm:text-6xl ">
                <CountUp start={0} end={125} />
                <span className="text-lg">+</span>
              </h3>
              <p className="text-lg text-myBgDarkTwo dark:text-myGray ">
                Project Completed
              </p>
            </div>
            <div className="flex items-center gap-4 mr-3  bg-myBgLight dark:bg-myBgDark w-fit px-4 rounded-md py-2">
              <h3 className="font-bold text-myBgDarkTwo dark:text-white flex text-5xl sm:text-6xl ">
                <CountUp start={0} end={85} />
                <span className="text-lg">+</span>
              </h3>
              <p className="text-lg text-myBgDarkTwo dark:text-myGray ">
                Happy Clients
              </p>
            </div>
          </Marquee>
        </div>
      </Card>
    </>
  );
}
