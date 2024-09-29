import React from "react";
import Card from "../Card/Card.tsx";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import arrowDown from "@/public/images/arrowDown.svg";
import circleText from "@/public/images/circle-text.png";
import circleTextLight from "@/public/images/circle-text-light.png";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import WorkingArea from "./WorkingArea.tsx";
import AwardItems from "./AwardItems.tsx";
import Publications from "./Publications.tsx";
import Link from "next/link";
import Counter from "../Home/Counter.tsx";
import Testimonial from "../Testimonial/Testimonial.tsx";

export default function About() {
  return (
    <>
      <Card>
        <div className="p-6 xl:pt-12 xl:px-10 xl:pb-10">
          {/* top info start */}
          <div className="flex xl:flex-row flex-col gap-6 xl:gap-10 justify-between mb-10 xl:mb-12">
            {/* text */}
            <div className="xl:max-w-[400px] w-full flex-grow order-2 xl:order-none">
              <h1 className="text-[30px] xl:text-[40px] text-[#1a1f2c] dark:text-[#f0f2f5] font-semibold mb-6 leading-[1.2em] ">
                Hi, This Is
                <span className="text-[#4770ff] text-[30px] xl:text-[34px] ml-1">
                  Programmer Rabbani
                </span>{" "}
                👋
              </h1>
              <p className="xl:text-base text-lg font-normal xl:leading-[1.333em] leading-[1.5em] text-[#576076] dark:text-[rgba(240,242,245,.7)] text-justify ">
                I transform your ideas into dynamic, custom web solutions that
                not only address your needs but also inspire and engage your
                audience. With a deep understanding of modern web technologies,
                including
                <b className="text-black dark:text-white">
                  JavaScript, Node.js, React.js, MongoDB, Express.js, REST APIs,
                  Next.js, Redux Toolkit,
                </b>
                I am committed to delivering standout web projects. Whether it's
                building from the ground up or refining existing platforms, my
                goal is to craft experiences that are intuitive, efficient, and
                tailored to your vision.
              </p>
            </div>
            {/* available Button */}
            <div className="text-base xl:text-lg font-medium text-[#4770ff] bg-[#f0f2f5] dark:bg-[#0e1018] py-2 px-4 w-fit h-full leading-[1.5em] rounded-lg flex items-center gap-2 order-1 xl:order-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <FaCircle className="relative inline-flex h-2 w-2" />
              </span>
              Available For Hire
            </div>
          </div>
          {/* top info end */}

          

          {/* working with area start */}

          <div className="workingWithArea hidden">
            <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] mb-8 ">
              Working With 50+ Brands ✨ Worldwide
            </h2>
            {/* working area main */}
            <WorkingArea />
          </div>
          {/* working with area end */}

          {/*  Trusted Clients Start */}
          <div className="mt-[50px] hidden">
            <h2 className="text-2xl xl:text-[30px] font-medium leading-[1.3em] xl:leading-[1.2em] mb-8 ">
              Trusted By 1200+ Clients
            </h2>
            {/* slider */}
            <SliderComponent>
              <Testimonial />
            </SliderComponent>
          </div>
          {/*  Trusted Clients End */}

          {/* Awards and Recognitions Start */}
          <div className="awardsRecognitions mt-[50px]">
            <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.3em] xl:leading-[1.2em] mb-8 ">
              Awards and Recognitions
            </h2>
            {/* Awards and Recognitions Items */}
            <AwardItems />
          </div>
          {/* Awards and Recognitions End */}

          {/* Article and Publications Start */}
          <div className="mt-[50px]">
            <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.3em] xl:leading-[1.2em] mb-8 ">
              Article and Publications
            </h2>
            {/* slider */}
            <SliderComponent>
              <Publications />
            </SliderComponent>
          </div>
          {/* Article and Publications End */}

        </div>
      </Card>
    </>
  );
}
