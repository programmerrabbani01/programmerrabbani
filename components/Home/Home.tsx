import React from "react";
import Card from "@/components/Card/Card.tsx";
import ScrollCard from "@/components/ScrollCard/ScrollCard.tsx";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRightSquare, IconPlus, IconX } from "@tabler/icons-react";
import { expert } from "@/data/Expert.tsx";
import { HomeServices } from "@/data/HomeService.tsx";
import { socialItems } from "@/data/Social.tsx";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <div className="flex items-start justify-between flex-col lg:flex-row xl:flex-row xl:space-x-5">
        <div className="xl:w-1/2 xl:block hidden">
          <Card>
            <div className="overflow-hidden p-6">
              <h3 className="text-2xl dark:text-white font-semibold leading-[1.333em] mb-[15px] ">
                My Education
              </h3>
              <ScrollCard />
            </div>
          </Card>
        </div>
        <div className="xl:w-1/2 w-full">
          <Card>
            <div className="mt-6 lg:mt-0 xl:mt-0">
              <div className="overflow-hidden p-6">
                <div className="flex justify-between sm:items-center flex-col sm:flex-row ">
                  <h3 className="text-2xl dark:text-white font-semibold leading-[1.333em] mb-2 ">
                    My Skills Area
                  </h3>
                  <Link
                    href="/about#skills"
                    className="text-base font-semibold hover:underline underline-offset-8 transition-all duration-300 text-myPrimary group"
                  >
                    View more
                    <span className="block h-[2px] max-w-0 xl:group-hover:max-w-full bg-myPrimary transition-all duration-300"></span>
                  </Link>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap items-center">
                    {expert.map((experts) => {
                      return (
                        <div className="w-1/3 text-center" key={experts.id}>
                          <div className="px-[10px] mt-4">
                            <div className="bg-myBgLight dark:bg-myBgDark rounded-lg py-[14px] px-[10px]">
                              <Image
                                src={experts.src}
                                alt={experts.alt}
                                className="w-8 h-8 mx-auto object-contain"
                              />
                            </div>
                            <div className="text-base font-medium mt-2 leading-[1.5em] text-myBgDarkTwo dark:text-white">
                              {experts.title}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/* Expert area */}
      <div className="w-full mt-6">
        <Card>
          <div className="p-6">
            <h3 className="flex xl:flex-row dark:text-white lg:flex-row md:flex-row sm:flex-row flex-col items-start xl:items-center lg:items-center md:items-center sm:items-center gap-[5px] xl:gap-[15px] lg:gap-[15px] md:gap-[15px] sm:gap-[15px]  justify-between text-2xl font-semibold leading-[1.333em] mb-[15px]">
              My Expertise
              {/* <Link
                href="/services"
                className="hidden text-base font-normal text-myPrimary leading-[1.5em] flex items-center border-b border-myBorder dark:border-myGray hover:border-myPrimary dark:hover:border-myPrimary transition-all duration-300"
              >
                See All Services <IconArrowRightSquare stroke={2} />
              </Link> */}
            </h3>
            {/* items */}
            <Marquee>
              <div className="flex flex-row justify-center flex-wrap">
                {HomeServices.map((service) => {
                  return (
                    <div
                      className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-2/4  mt-6 px-3 flex  "
                      key={service.id}
                    >
                      <div
                        className="p-4 px-4 pb-4 bg-myBgLight dark:bg-myBgDark
                  rounded-2xl text-center"
                      >
                        <div className="py-6 px-[14px] bg-[#fff] dark:bg-[#000] rounded-lg ">
                          <Image
                            src={service.src}
                            alt={service.alt}
                            height={84}
                            className="mx-auto object-contain"
                          />
                        </div>
                        <div className="text-base font-medium text-[#1a1f2c] dark:text-white leading-[1.5em] mt-4 ">
                          {service.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </Card>
      </div>
      {/*  */}
    </>
  );
}
