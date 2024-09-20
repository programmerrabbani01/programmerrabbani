import React from "react";
import Card from "../Card/Card.tsx";
import { IconArrowRightSquare } from "@tabler/icons-react";
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
    title: "Front-End Design",
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
      <div className="mt-6 flex justify-start items-start">
        <div className="w-4/6">
          <Card>
            <div className="p-6">
              <h3 className="flex items-center gap-[15px] justify-between text-2xl font-semibold leading-[1.333em] mb-2">
                Services I Offered
                <Link
                  href=""
                  className="text-base font-normal text-[#4770ff] leading-[1.5em] flex items-center border-b border-[#dbdfe5] dark:border-[#576076] hover:border-[#4770ff] dark:hover:border-[#4770ff] transition-all duration-300"
                >
                  See All Services <IconArrowRightSquare stroke={2} />
                </Link>
              </h3>
              {/* items */}

              <div className="flex">
                {services.map((service) => {
                  return (
                    <div className="w-1/4 mt-6 px-3 flex" key={service.id}>
                      <div
                        className="p-4 px-4 pb-4 bg-[#f0f2f5] dark:bg-[#0e1018]
                  rounded-2xl text-center"
                      >
                        <div className="py-6 px-[14px] bg-[#fff] dark:bg-[#000] rounded-lg ">
                          <Image
                            src={service.src}
                            alt={service.alt}
                            width={89}
                            height={89}
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
        <div className="w-2/6 pl-3">
          <Card>|Bye</Card>
        </div>
      </div>
    </>
  );
}
