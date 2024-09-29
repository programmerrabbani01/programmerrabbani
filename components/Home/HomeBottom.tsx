import React from "react";
import Card from "../Card/Card.tsx";
import Counter from "./Counter.tsx";
import Coverflow from "../Coverflow/Coverflow.tsx";

type Props = {};

export default function HomeBottom({}: Props) {
  return (
    <>
      {/* slider */}
      <div className=" w-full mt-6 hidden">
        <Card>
          <div className="p-6">
            {/* scroll */}
            <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg h-14 flex items-center overflow-hidden whitespace-nowrap">
              {/* <Marquee speed={100}> */}
              <div className="text-lg font-medium text-[#576076] mr-[10px] leading-[1.6em]  text_slider">
                Available For Hire 🚀 Crafting Digital Experiences 🎨 Available
                For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire
                🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
                Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting
                Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital
                Experiences 🎨 Available For Hire 🚀 Crafting Digital
                Experiences 🎨 Available For Hire 🚀 Crafting Digital
                Experiences 🎨
              </div>
              {/* </Marquee> */}
            </div>
            {/* text */}
          </div>
        </Card>
      </div>
      {/* slider */}

      {/* counter */}
      <Counter />
      {/* counter */}

      {/* projects */}
      <div className="mt-6">
        <Card>
          <div className="p-6">
            <h2 className="text-2xl sm:text-3xl mb-7 text-center font-semibold ">
              Works & Projects
            </h2>
            <Coverflow />
          </div>
        </Card>
      </div>
      {/* projects */}

      {/* Blog */}
      <div className="mt-6">
        <Card>
          <div className="p-6">Hello</div>
        </Card>
      </div>
      {/* Blog */}
    </>
  );
}
