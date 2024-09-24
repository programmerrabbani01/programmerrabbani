import React from "react";
import Card from "../Card/Card.tsx";
import { IconArrowRightSquare, IconBrandSkype } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import frontEnd from "@/public/images/services/frontend.png";
import backEnd from "@/public/images/services/backend.png";
import nodejs from "@/public/images/services/nodejs.png";
import mongodb from "@/public/images/services/mongodb.png";

type Props = {};

const services = [
  {
    id: 1,
    src: frontEnd,
    alt: "frontend",
    title: "Front-End",
  },
  {
    id: 2,
    src: backEnd,
    alt: "backend",
    title: "Back-End",
  },
  {
    id: 3,
    src: nodejs,
    alt: "nodejs",
    title: "Node JS",
  },
  {
    id: 4,
    src: mongodb,
    alt: "mongodb",
    title: "MongoDB",
  },
];

export default function HomeBottom({}: Props) {
  return (
    <>
      <div className="mt-6 flex xl:flex-row flex-col">
        <div className="xl:w-4/6 w-full">
          <Card>
            <div className="p-6">
              <h3 className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-start xl:items-center lg:items-center md:items-center sm:items-center gap-[5px] xl:gap-[15px] lg:gap-[15px] md:gap-[15px] sm:gap-[15px]  justify-between text-2xl font-semibold leading-[1.333em] mb-2">
                Services I Offered
                <Link
                  href=""
                  className="text-base font-normal text-[#4770ff] leading-[1.5em] flex items-center border-b border-[#dbdfe5] dark:border-[#576076] hover:border-[#4770ff] dark:hover:border-[#4770ff] transition-all duration-300"
                >
                  See All Services <IconArrowRightSquare stroke={2} />
                </Link>
              </h3>
              {/* items */}

              <div className="flex flex-wrap">
                {services.map((service) => {
                  return (
                    <div
                      className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-2/4 w-2/4 mt-6 px-3 flex service_items "
                      key={service.id}
                    >
                      <div
                        className="p-4 px-4 pb-4 bg-[#f0f2f5] dark:bg-[#0e1018]
                  rounded-2xl text-center"
                      >
                        <div className="py-6 px-[14px] bg-[#fff] dark:bg-[#000] rounded-lg ">
                          <Image
                            src={service.src}
                            alt={service.alt}
                            className="mx-auto object-cover"
                          />
                        </div>
                        <div className="text-base font-medium text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] leading-[1.5em] mt-4 ">
                          {service.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
        <div className="xl:w-2/6 w-full xl:pl-3 xl:mt-0 mt-6">
          <Card>
            <div className="p-6">
              {/* scroll */}
              <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg h-14 mb-6 flex items-center overflow-hidden whitespace-nowrap">
                {/* <Marquee speed={100}> */}
                <div className="text-lg font-medium text-[#576076] mr-[10px] leading-[1.6em]  text_slider">
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                  Available For Hire 🚀 Crafting Digital Experiences 🎨
                </div>
                {/* </Marquee> */}
              </div>
              {/* text */}
              <h3 className="text-[40px] font-semibold text-[#1a1f2c] leading-[1.375em] dark:text-[#f0f2f5] mb-6 ">
                Let's👋<span className="block">Work Together</span>
              </h3>
              <Link
                href=""
                className="text-base font-medium text-[#4770ff] border-b border-b-[#dbdfe5] hover:border-b-[#4770ff] transition-all duration-300 inline-block"
              >
                <div className="flex items-center mb-1">
                  Let's Talk <IconBrandSkype stroke={2} className="ml-[8px]" />
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
