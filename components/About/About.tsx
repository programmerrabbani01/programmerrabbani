import React from "react";
import Card from "../Card/Card.tsx";
import { FaCircle, FaStar } from "react-icons/fa";
import Image from "next/image";
import arrowDown from "@/public/images/arrowDown.svg";
import circleText from "@/public/images/circle-text.png";
import circleTextLight from "@/public/images/circle-text-light.png";
import WorkingArea from "../WorkingArea/WorkingArea.tsx";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import Link from "next/link";
import Testimonial from "../Testimonial/Testimonial.tsx";

const counterItems = [
  {
    id: 1,
    number: "40+",
    title: "Year of Experience",
  },
  {
    id: 2,
    number: "86+",
    title: "Project Completed",
  },
  {
    id: 3,
    number: "72+",
    title: "Happy Client",
  },
];

export default function About() {
  return (
    <>
      <Card>
        <div className="pt-12 px-10 pb-10">
          {/* top info start */}
          <div className="flex gap-10 justify-between mb-12">
            {/* text */}
            <div className="max-w-[400px] flex-grow">
              <h1 className="text-[38px] text-[#1a1f2c] dark:text-[#f0f2f5] font-semibold mb-6 leading-[1.2em] ">
                Hi, This Is
                <span className="text-[#4770ff] text-[34px] ml-1">
                  Programmer Rabbani
                </span>{" "}
                👋
              </h1>
              <p className="xl:text-base text-sm font-normal xl:leading-[1.333em] leading-[1.5em] text-[#576076] dark:text-[rgba(240,242,245,.7)] text-justify ">
                I transform your ideas into dynamic, custom web solutions that
                not only address your needs but also inspire and engage your
                audience. With a deep understanding of modern web technologies,
                including{" "}
                <b className="text-black dark:text-white">
                  {" "}
                  JavaScript, Node.js, React.js, MongoDB, Express.js, REST APIs,
                  Next.js, Redux Toolkit,
                </b>{" "}
                I am committed to delivering standout web projects. Whether it's
                building from the ground up or refining existing platforms, my
                goal is to craft experiences that are intuitive, efficient, and
                tailored to your vision.
              </p>
            </div>
            {/* available Button */}
            <div className="text-lg font-medium text-[#4770ff] bg-[#f0f2f5] dark:bg-[#0e1018] py-2 px-4 w-fit h-full leading-[1.5em] rounded-lg flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <FaCircle className="relative inline-flex h-2 w-2" />
              </span>
              Available For Hire
            </div>
          </div>
          {/* top info end */}

          {/* counter area start */}
          <div className="flex justify-between gap-[30px] mb-[50px] ">
            {/* counter */}
            <div className="flex gap-[40px] max-w-[461px] flex-grow ">
              {counterItems.map((items) => {
                return (
                  <div className="counter_items" key={items.id}>
                    <h3 className="text-[40px] font-semibold text-[#1a1f2c] dark:text-[#f0f2f5] leading-[.9em] ">
                      {items.number}
                    </h3>
                    <p className="text-base font-normal text-[#576076] leading-[1.5em] mt-2 ">
                      {items.title}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* circle */}
            <div className="mt-[-70px] mr-[18px] flex-shrink-0 relative w-[131px] h-[138px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* text image */}
                <Image
                  src={circleText}
                  alt="circleText"
                  className="dark:hidden block animate-spin-slow w-[100px] h-[100px]"
                />
                <Image
                  src={circleTextLight}
                  alt="circleTextLight"
                  className="hidden dark:block animate-spin-slow w-[100px] h-[100px]"
                />
                {/* arrow image */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <div className="w-[70px] h-[70px] bg-[#4770ff] rounded-full flex items-center justify-center">
                    <Image src={arrowDown} alt="arrowDown" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* counter area end */}

          {/* working with area start */}

          <div className="workingWithArea">
            <h2 className="text-3xl font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] mb-8 ">
              Working With 50+ Brands ✨ Worldwide
            </h2>
            {/* working area main */}
            <WorkingArea />
          </div>
          {/* working with area end */}

          {/*  Trusted Clients Start */}
          <div className="mt-[50px]">
            <h2 className="text-[30px] font-medium leading-[1.2em] mb-8 ">
              Trusted By 1200+ Clients
            </h2>
            {/* slider */}
            <SliderComponent>
              <Testimonial />
            </SliderComponent>
          </div>
          {/*  Trusted Clients End */}
        </div>
      </Card>
    </>
  );
}
