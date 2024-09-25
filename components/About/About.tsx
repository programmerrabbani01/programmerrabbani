import React from "react";
import Card from "../Card/Card.tsx";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import arrowDown from "@/public/images/arrowDown.svg";
import circleText from "@/public/images/circle-text.png";
import circleTextLight from "@/public/images/circle-text-light.png";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import WorkingArea from "./WorkingArea.tsx";
import Testimonial from "./Testimonial.tsx";
import AwardItems from "./AwardItems.tsx";
import Publications from "./Publications.tsx";
import Link from "next/link";
import Counter from "./Counter.tsx";

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
            <div className="text-base xl:text-lg font-medium text-[#4770ff] bg-[#f0f2f5] dark:bg-[#0e1018] py-2 px-4 w-fit h-full leading-[1.5em] rounded-lg flex items-center gap-2 order-1 xl:order-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <FaCircle className="relative inline-flex h-2 w-2" />
              </span>
              Available For Hire
            </div>
          </div>
          {/* top info end */}

          {/* counter area start */}
          <div className="flex justify-between gap-[30px] mb-10 xl:mb-[50px]  ">
            {/* counter */}
            <Counter />
            {/* circle */}
            <div className="mt-[-70px] mr-[18px] flex-shrink-0 relative w-[131px] h-[138px] hidden xl:block">
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
            <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] mb-8 ">
              Working With 50+ Brands ✨ Worldwide
            </h2>
            {/* working area main */}
            <WorkingArea />
          </div>
          {/* working with area end */}

          {/*  Trusted Clients Start */}
          <div className="mt-[50px]">
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

          {/* work-together-slider start */}
          <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg overflow-hidden p-6 mt-[50px] ">
            <div className="flex items-center gap-6">
              {/* slider item */}
              <div className="inline-block auto_scroll_list text_slider whitespace-nowrap">
                {/* Duplicate links for sliding effect */}
                {Array(2)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="inline-block">
                      <Link
                        href=""
                        className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px] font-medium text-[#576076] leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-[#576076] before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-[#1a1f2c] dark:hover:text-white transition-all duration-300 mr-10"
                      >
                        Let's 👋 Work Together
                      </Link>
                      <Link
                        href=""
                        className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px]  font-medium text-[#576076] leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-[#576076] before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-[#1a1f2c] dark:hover:text-white transition-all duration-300 mr-10 "
                      >
                        Let's 👋 Work Together
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* work-together-slider end */}
        </div>
      </Card>
    </>
  );
}
