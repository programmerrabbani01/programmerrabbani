import React from "react";
import Card from "../Card/Card.tsx";
import { FaCircle } from "react-icons/fa";

type Props = {};

export default function About({}: Props) {
  return (
    <>
      <Card>
        <div className="pt-12 px-10 pb-10">
          {/* top info */}
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
        </div>
      </Card>
    </>
  );
}
