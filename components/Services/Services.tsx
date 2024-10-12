"use client";

import React from "react";
import Card from "../Card/Card.tsx";
import { FaCircle } from "react-icons/fa";
import { services } from "@/data/Services.tsx";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import blog from "@/public/images/blog/blog-img-1.jpg";
import WorkingArea from "../About/WorkingArea.tsx";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import AwardItems from "../About/AwardItems.tsx";
import Link from "next/link";
import { testimonialItems } from "@/data/Testimonial.tsx";
import { FaStar } from "react-icons/fa";
import Accordion from "../Accordion/Accordion.tsx";

type Props = {};

export default function Services({}: Props) {
  return (
    <>
      <Card>
        <div className="p-6 xl:pt-12 xl:px-10 xl:pb-10">
          {/* top info start */}
          <div className="flex xl:flex-row flex-col gap-6 xl:gap-10 justify-between ">
            {/* text */}
            <div className="xl:max-w-[400px] w-full flex-grow order-2 xl:order-none">
              <h1 className="text-[30px] xl:text-[40px] text-myBgDarkTwo dark:text_bg font-semibold mb-6 leading-[1.2em] ">
                Why Me
              </h1>
            </div>
            {/* available Button */}
            <div className="text-base xl:text-lg font-medium text-myPrimary bg-myBgLight dark:bg-[#0e1018] py-2 px-4 w-fit h-full leading-[1.5em] rounded-lg flex items-center gap-2 order-1 xl:order-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <FaCircle className="relative inline-flex h-2 w-2" />
              </span>
              Available For Hire
            </div>
          </div>
          {/* top info end */}

          {/* service Card */}
          <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-2 gap-5 mt-[60px] mb-[50px]">
            {services.map((srv, index) => {
              return (
                <Tilt
                  key={index}
                  className="bg-myBgLight items-center flex flex-col justify-center p-4 rounded-md dark:bg-[#0E1018] cursor-pointer"
                >
                  <div className="text-5xl text-myPrimary w-10 h-10 mb-3">
                    {srv.icon}
                  </div>
                  <h6 className="text-[14px] text-center font-semibold mt-2 uppercase ">
                    {srv.name}
                  </h6>
                  <p className="text-[14px] text-center font-medium mt-2 text-[#576076] dark:text-[rgba(240,242,245,.7)]  ">
                    {srv.description}
                  </p>
                </Tilt>
              );
            })}

            {/*  */}
          </div>
          <div className="mt-[56px] mb-[50px] mx-0 rounded-lg aspect-[16/9] overflow-hidden hidden">
            <Image src={blog} alt="blog" />
          </div>
          {/* service Card */}

          {/* working with area start */}

          <div className="workingWithArea hidden">
            <h2 className="text-2xl xl:text-3xl font-medium text-myBgDarkTwo dark:text-myBgLight leading-[1.2em] mb-8 ">
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
              {testimonialItems.map((item) => {
                return (
                  <div className="w-[340px] outline-none" key={item.id}>
                    <div className="bg-myBgLight dark:bg-[#0e1018] p-6 mx-3 rounded-lg shadow-md">
                      {/* rating */}
                      <div className="flex items-center justify-between gap-[30px] mb-[20px]">
                        {/* rating */}
                        <div className="rating flex items-center">
                          <FaStar className="text-[#faad3d] text-sm" />
                          <FaStar className="text-[#faad3d] text-sm" />
                          <FaStar className="text-[#faad3d] text-sm" />
                          <FaStar className="text-[#faad3d] text-sm" />
                          <FaStar className="text-[#faad3d] text-sm" />
                        </div>
                        <div className="website">
                          <Link
                            href={item.linkUrl}
                            className="bg-white text-sm font-normal leading-[.9rem] py-1 px-2 rounded-[4px] text-[rgba(13,110,253,1)] hover:bg-myPrimary hover:text-white transition-all duration-300 "
                          >
                            {item.linkText}
                          </Link>
                        </div>
                      </div>
                      {/* details */}
                      <div className="details mb-[30px]">
                        <p className=" text-lg text-myBgDarkTwo dark:text-myBgLight font-normal leading-[1.5em] ">
                          {item.reviewText}
                        </p>
                      </div>
                      {/* designation */}

                      <div className="text-base font-normal leading-[1.6em] text-[#616670]">
                        <strong className="dark:text-myBgLight text-myBgDarkTwo text-base font-medium ">
                          {item.authorName}
                        </strong>{" "}
                        - {item.authorProfession}
                      </div>
                    </div>
                  </div>
                );
              })}
            </SliderComponent>
          </div>
          {/*  Trusted Clients End */}

          {/* Awards and Recognitions Start */}
          <div className="awardsRecognitions mt-[50px] hidden">
            <h2 className="text-2xl xl:text-3xl font-medium text-myBgDarkTwo dark:text-myBgLight leading-[1.3em] xl:leading-[1.2em] mb-8 ">
              Awards and Recognitions
            </h2>
            {/* Awards and Recognitions Items */}
            <AwardItems />
          </div>
          {/* Awards and Recognitions End */}

          {/* Accordion Start */}
          <div className="mt-[50px] hidden">
            <h2 className="text-3xl font-medium leading-[1.2em] text-myBgDarkTwo dark:text-myBgLight mb-8 ">
              Frequently Asked Questions
            </h2>

            {/* accordion */}

            <Accordion />
          </div>
          {/* Accordion End */}

          {/* work-together-slider start */}
          <div className="bg-myBgLight dark:bg-[#0e1018] rounded-lg overflow-hidden p-6 mt-[50px] hidden">
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
                        className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px] font-medium text-[#576076] leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-[#576076] before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-myBgDarkTwo dark:hover:text-white transition-all duration-300 mr-10"
                      >
                        Let's 👋 Work Together
                      </Link>
                      <Link
                        href=""
                        className="inline-block text-[30px] md:text-[40px] lg:text-[40px] xl:text-[40px]  font-medium text-[#576076] leading-[.9em] mx-[15px] relative before:absolute before:w-[10px] before:h-[10px] before:bg-[#576076] before:rounded-full before:top-1/2 before:left-[-32px] before:transform before:-translate-y-1/2 hover:text-myBgDarkTwo dark:hover:text-white transition-all duration-300 mr-10 "
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
