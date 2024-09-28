import React from "react";
import Card from "@/components/Card/Card.tsx";
import ScrollCard from "@/components/ScrollCard/ScrollCard.tsx";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRightSquare, IconPlus, IconX } from "@tabler/icons-react";
import { expert } from "@/data/Expert.tsx";
import { HomeServices } from "@/data/HomeService.tsx";

export default function Home() {
  return (
    <>
      <div className="flex items-start justify-between flex-col md:flex-row lg:flex-row xl:flex-row md:space-x-5">
        <div className="xl:w-1/2 w-full">
          <Card>
            <div className="overflow-hidden p-6">
              <h3 className="text-2xl font-semibold leading-[1.333em] mb-2 ">
                Work Experience
              </h3>
              <ScrollCard />
            </div>
          </Card>
        </div>
        <div className="xl:w-1/2 w-full">
          <Card>
            <div className="mt-6 md:mt-0 lg:mt-0 xl:mt-0">
              <div className="overflow-hidden p-6">
                <h3 className="text-2xl font-semibold leading-[1.333em] mb-2 ">
                  My Skills Area
                </h3>
                <div className="mt-6">
                  <div className="flex flex-wrap items-center">
                    {expert.map((experts) => {
                      return (
                        <div className="w-1/3 text-center" key={experts.id}>
                          <div className="px-[10px] mt-4">
                            <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg py-[14px] px-[10px]">
                              <Image
                                src={experts.src}
                                alt={experts.alt}
                                className="w-8 h-8 mx-auto object-contain"
                              />
                            </div>
                            <div className="text-base font-medium mt-2 leading-[1.5em] text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)]">
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
      {/*  */}
      <div className="w-full mt-6">
        <Card>
          <div className="p-6">
            <h3 className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-start xl:items-center lg:items-center md:items-center sm:items-center gap-[5px] xl:gap-[15px] lg:gap-[15px] md:gap-[15px] sm:gap-[15px]  justify-between text-2xl font-semibold leading-[1.333em] mb-[22px]">
              Services I Offered
              <Link
                href=""
                className="text-base font-normal text-[#4770ff] leading-[1.5em] flex items-center border-b border-[#dbdfe5] dark:border-[#576076] hover:border-[#4770ff] dark:hover:border-[#4770ff] transition-all duration-300"
              >
                See All Services <IconArrowRightSquare stroke={2} />
              </Link>
            </h3>
            {/* items */}

            <div className="flex flex-row justify-center flex-wrap service_items">
              {HomeServices.map((service) => {
                return (
                  <div
                    className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-2/4  mt-6 px-3 flex  "
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
    </>
  );
}
