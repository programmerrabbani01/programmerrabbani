"use client";

import React from "react";
import Card from "../Card/Card.tsx";
import { FaCircle } from "react-icons/fa";
import { services } from "@/data/Services.tsx";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import blog from "@/public/images/blog/blog-img-1.jpg";

type Props = {};

export default function Services({}: Props) {
  return (
    <>
      <Card>
        <div className="p-6 xl:pt-12 xl:px-10 xl:pb-10">
          {/* top info start */}
          <div className="flex xl:flex-row flex-col gap-6 xl:gap-10 justify-between mb-10 xl:mb-12">
            {/* text */}
            <div className="xl:max-w-[400px] w-full flex-grow order-2 xl:order-none">
              <h1 className="text-[30px] xl:text-[40px] text-[#1a1f2c] dark:text-[#f0f2f5] font-semibold mb-6 leading-[1.2em] ">
                Services I
                <span className="text-[#4770ff] text-[30px] xl:text-[40px] ml-1">
                  Offered
                </span>{" "}
              </h1>
              <p className="mt-2 text-[#576076] dark:text-[rgba(240,242,245,.7)] text-base leading-[1.5em]  font-medium md:text-justify lg:text-justify xl:text-justify ">
                I transform your ideas into custom web solutions that engage
                your audience. My services include &nbsp;
                <span className="font-semibold dark:text-white text-[#1a1f2c]">
                  Full Stack Web Development, Front-End and Back-End
                  Development, Responsive Design, React & Next.js Development,
                  API Integration,Version Control with Git,Clean Code,
                  Debugging, and NPM Package &nbsp;
                </span>
                Creation.
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

          {/* service Card */}
          <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-2 gap-5 mt-[60px] mb-[50px]">
            {services.map((srv, index) => {
              return (
                <Tilt
                  key={index}
                  className="bg-[#F0F2F5] items-center flex flex-col justify-center p-4 rounded-md dark:bg-[#0E1018] cursor-pointer"
                >
                  <div className="text-5xl text-[#4770ff] w-10 h-10 mb-3">
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
          <div className="mt-[56px] mb-[50px] mx-0 rounded-lg aspect-[16/9] overflow-hidden">
            <Image src={blog} alt="blog" />
          </div>
          {/* service Card */}
        </div>
      </Card>
    </>
  );
}
