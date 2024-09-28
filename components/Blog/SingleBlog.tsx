import React from "react";
import Card from "../Card/Card.tsx";
import Image from "next/image";
import blog from "@/public/images/blog/blog-img-1.jpg";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import { blogItems } from "@/data/Blog.tsx";
import SliderComponent from "../SliderComponent/SliderComponent.tsx";
import Publications from "../About/Publications.tsx";
import { IconArrowElbowRight } from "@tabler/icons-react";

type Props = {};

export default function SingleBlog({}: Props) {
  return (
    <>
      <Card>
        <div className="p-6 xl:pt-12 xl:px-10 xl:pb-10">
          {/* image */}
          <div className="rounded-lg aspect-[16/9] overflow-hidden ">
            <Image
              src={blog}
              alt="blog"
              className="h-full object-cover rounded-lg"
            />
          </div>
          {/* image */}

          {/* date reading time */}
          <div className="bottomText flex flex-wrap items-center mt-3">
            <div className="text-sm font-normal text-[rgba(87,96,118,.5)] dark:text-[#576076] leading-[1.4em] pl-[15px] pr-[5px] ml-[3px] ">
              15 min read
            </div>
            <div className="text-sm font-normal text-[rgba(87,96,118,.5)] dark:text-[#576076] leading-[1.4em] pl-[15px] pr-[5px] ml-[3px] ">
              Nov 6, 2023
            </div>
            <div className="text-sm font-normal text-[rgba(87,96,118,.5)] dark:text-[#576076] leading-[1.4em] pl-[15px] pr-[5px] ml-[3px] ">
              1.5k Views
            </div>
          </div>
          {/* date reading time */}

          {/* text */}
          <div className="mt-[26px] lg:mb-10 xl:mb-10 ">
            <h3 className="text-base md:text-2xl lg:text-2xl xl:text-2xl leading-[1.3em] font-medium mb-6 lg:mb-8 xl:mb-8 ">
              Want To Upgrade Your Brain? Stop Doing 7 Things
            </h3>
            <p className="text-sm md:text-base lg:text-base xl:text-base font-normal leading-[1.7em] text-[#616670] dark:text-[#d1d5db] mb-[25px] ">
              Mastering the Art of Email Marketing tips for Success pattern of
              living, including their behaviors, habits, and daily routines. It
              encompasses everything from their diet, exercise routines, and
              sleep habits to their recreational activities, social
              interactions, and work habits. A person's lifestyle plays a
              significant role in determining their overall well-being,
              including their physical and mental health, as well as their
              happiness and satisfaction with life. A healthy lifestyle, which
              includes a balanced diet, regular exercise, and a healthy sleep
              pattern, can improve an individual's quality of life
            </p>
            <p className="text-sm md:text-base lg:text-base xl:text-base font-normal leading-[1.7em] text-[#616670] dark:text-[#d1d5db] mb-[25px] ">
              A healthy lifestyle, which includes a balanced diet, regular
              exercise, and a healthy sleep pattern, can improve an individual's
              quality of life and reduce the risk of chronic diseases. On the
              other hand, unhealthy lifestyle habits, such as smoking, excessive
              alcohol consumption, and a sedentary lifestyle, can have negative
              impacts on one's health and well-being. Thus, making intentional
              choices about one's lifestyle can lead to improved health,
              happiness, and longevity.
            </p>
            <blockquote className="text-sm md:text-base lg:text-base xl:text-base font-normal leading-[1.7em] text-[#1a1f2c] dark:text-[#d1d5db] border-l-4 border-l-[#4770ff] pl-5 mb-4 italic ">
              <p>
                " There are many different forms of travel, including road
                trips, cruises, backpacking, and more, each offering its own
                unique set of experiences and adventures. "
              </p>
            </blockquote>
            <p className="text-sm md:text-base lg:text-base xl:text-base font-normal leading-[1.7em] text-[#616670] dark:text-[#d1d5db] mb-[25px]">
              The Role of Storytelling in Email Marketing CampaignsEmail
              Marketing Automation: Streamlining Your Campaigns for Results can
              improve an individual's quality of life and reduce the risk of
              chronic diseases. On the other hand, unhealthy lifestyle habits,
              such as smoking, excessive alcohol consumption, and a sedentary
              lifestyle, can have negative impacts on one's health and
              well-being. Thus, making intentional choices about one's lifestyle
              can lead to improved health, happiness, and longevity
            </p>
            <h3 className="text-base md:text-2xl lg:text-2xl xl:text-2xl leading-[1.3em] font-medium mb-6 lg:mb-8 xl:mb-8  mt-10 ">
              The Role of Storytelling in Email Marketing
            </h3>
            <p className="text-sm md:text-base lg:text-base xl:text-base font-normal leading-[1.7em] text-[#616670] dark:text-[#d1d5db] mb-[25px]">
              Lifestyle refers to an individual's habits, behaviors, and
              patterns of living. encompasses all aspects of a person's daily
              life, including their diet, exercise routine Lifestyle choices can
              also impact a person's financial, social, and environmental
              well-being. A person's lifestyle plays a major role in determining
              their overall health, happy happiness, and longevity.
            </p>
            <ul className="ml-[7px] pl-0 list-none m-0 p-0 ">
              <li className="text-sm md:text-base lg:text-base xl:text-base pb-[10px] pl-7 font-normal leading-[1.7em] relative before:absolute before:w-[6px] before:h-[6px] before:bg-[#d1d5db] before:dark:bg-[#4b5563] before:rounded-full before:top-3 before:left-0 content:'' ">
                Lifestyle refers to an individual's habits, behaviors, and
                patterns of living.
              </li>
              <li className="text-sm md:text-base lg:text-base xl:text-base pb-[10px] pl-7 font-normal leading-[1.7em] relative before:absolute before:w-[6px] before:h-[6px] before:bg-[#d1d5db] before:dark:bg-[#4b5563] before:rounded-full before:top-3 before:left-0 content:'' ">
                It encompasses all aspects of a person's daily life, including
                their diet, exercise routine.
              </li>
              <li className="text-sm md:text-base lg:text-base xl:text-base pb-[10px] pl-7 font-normal leading-[1.7em] relative before:absolute before:w-[6px] before:h-[6px] before:bg-[#d1d5db] before:dark:bg-[#4b5563] before:rounded-full before:top-3 before:left-0 content:'' ">
                Lifestyle choices can also impact a person's financial, social,
                and environmental well-being.
              </li>
              <li className="text-sm md:text-base lg:text-base xl:text-base pb-[10px] pl-7 font-normal leading-[1.7em] relative before:absolute before:w-[6px] before:h-[6px] before:bg-[#d1d5db] before:dark:bg-[#4b5563] before:rounded-full before:top-3 before:left-0 content:'' ">
                A person's lifestyle plays a major role in determining their
                overall health, happiness, and quality of life.
              </li>
            </ul>
            {/* tags and share */}
            <div className="flex  md:items-center lg:items-center xl:items-center justify-between gap-5 md:gap-[30px] lg:gap-[30px] xl:gap-[30px] mt-[30px] mb-[60px] flex-col md:flex-row lg:flex-row  xl:flex-row ">
              {/* tags */}
              <div className="flex gap-[22px] items-center ">
                <h3 className="text-lg font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.5em] ">
                  Tags:
                </h3>
                <ul className="pl-0 list-none m-0 p-0">
                  <li className="inline-block mr-1 mb-[5px] md:mb-0 lg:mb-0 xl:mb-0">
                    <Link
                      href="#"
                      className="bg-white dark:bg-[#0e1018] border border-[#dbdfe5] dark:border-[#0e1018] text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] text-xs font-normal leading-[.9rem] py-1 px-2 rounded-[4px] inline-block hover:bg-[#4770ff] hover:text-white hover:border-[#4770ff] dark:hover:bg-[#4770ff] dark:hover:text-white dark:hover:border-[#4770ff] transition-all duration-300 "
                    >
                      Development
                    </Link>
                  </li>
                  <li className="inline-block mr-1">
                    <Link
                      href="#"
                      className="bg-white dark:bg-[#0e1018] border border-[#dbdfe5] dark:border-[#0e1018] text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] text-xs font-normal leading-[.9rem] py-1 px-2 rounded-[4px] inline-block hover:bg-[#4770ff] hover:text-white hover:border-[#4770ff] dark:hover:bg-[#4770ff] dark:hover:text-white dark:hover:border-[#4770ff] transition-all duration-300"
                    >
                      Design Trend
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Share */}
              <div className="flex gap-[22px] items-center ">
                <h3 className="text-lg font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.5em] ">
                  Share:
                </h3>
                <div className="mt-0">
                  <ul className="m-0 p-0 list-none">
                    <li className="inline-block mr-[6px] mb-[5px] md:mb-0 lg:mb-0 xl:mb-0">
                      <Link
                        href="#"
                        className="text-[#384559] dark:text-[#64748b] text-xl w-10 h-10 rounded-lg border border-[#dbdfe5] text-center leading-10 flex justify-center items-center hover:text-[#4770ff] dark:hover:text-[#4770ff] transition-all duration-300 dark:bg-[#0e1018] dark:border-none "
                      >
                        <FaGithub />
                      </Link>
                    </li>
                    <li className="inline-block mr-[6px] mb-[5px] md:mb-0 lg:mb-0 xl:mb-0">
                      <Link
                        href="#"
                        className="text-[#384559] dark:text-[#64748b] text-xl w-10 h-10 rounded-lg border border-[#dbdfe5] text-center leading-10 flex justify-center items-center hover:text-[#4770ff] dark:hover:text-[#4770ff] transition-all duration-300 dark:bg-[#0e1018] dark:border-none "
                      >
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li className="inline-block mr-[6px] mb-[5px] md:mb-0 lg:mb-0 xl:mb-0">
                      <Link
                        href="#"
                        className="text-[#384559] dark:text-[#64748b] text-xl w-10 h-10 rounded-lg border border-[#dbdfe5] text-center leading-10 flex justify-center items-center hover:text-[#4770ff] dark:hover:text-[#4770ff] transition-all duration-300 dark:bg-[#0e1018] dark:border-none "
                      >
                        <FaWhatsappSquare />
                      </Link>
                    </li>
                    <li className="inline-block mr-[6px] mb-[5px] md:mb-0 lg:mb-0 xl:mb-0">
                      <Link
                        href="#"
                        className="text-[#384559] dark:text-[#64748b] text-xl w-10 h-10 rounded-lg border border-[#dbdfe5] text-center leading-10 flex justify-center items-center hover:text-[#4770ff] dark:hover:text-[#4770ff] transition-all duration-300 dark:bg-[#0e1018] dark:border-none "
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* tags and share */}

            {/* related Blog */}
            <div className="mt-0 lg:mt-[50px] xl:mt-[50px]">
              <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.3em] xl:leading-[1.2em] mb-8 ">
                Related Post
              </h2>
              {/* slider */}
              <SliderComponent>
                <Publications />
              </SliderComponent>
            </div>
            {/* related Blog */}

            {/* leave a comment */}

            <div className="mt-[54px]">
              <h2 className="text-2xl xl:text-3xl font-medium text-[#1a1f2c] dark:text-[#f0f2f5] leading-[1.2em] mb-8 ">
                Leave a Comment
              </h2>
              {/* comment box */}
              <div className="p-6 bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg ">
                <form action="">
                  <div className="flex items-center justify-center flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-2">
                      <div className="mb-6 flex flex-col">
                        <label className="text-sm font-medium leading-[1.4em] mb-2">
                          Name
                        </label>
                        <input
                          className="rounded-lg py-4 px-6 border border-[#dbdfe5] text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-[#576076] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                          placeholder="Enter your name"
                          type="text"
                        ></input>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-2">
                      <div className="mb-6 flex flex-col">
                        <label className="text-sm font-medium leading-[1.4em] mb-2">
                          Email
                        </label>
                        <input
                          className="rounded-lg py-4 px-6 border border-[#dbdfe5] text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-[#576076] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out "
                          placeholder="Enter your email"
                          type="email"
                        ></input>
                      </div>
                    </div>
                    <div className="w-full px-2">
                      <div className="mb-6  flex flex-col">
                        <label className="text-sm font-medium leading-[1.4em] mb-2">
                          Comment
                        </label>
                        <textarea
                          className="rounded-lg py-4 px-6 border border-[#dbdfe5] text-xs sm:text-base md:text-base lg:text-base xl:text-base font-normal text-[#576076] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                          rows={4}
                          placeholder="Type details about your inquiry"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-2">
                      <button className="text-base font-medium text-white bg-[#4770ff] hover:bg-[#2563eb] transition-all duration-300 border-0 w-full rounded-lg py-4 px-6 flex items-center justify-center">
                        Post Comment{" "}
                        <IconArrowElbowRight
                          stroke={2}
                          className="w-5 h-5 ml-1"
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* comment box */}
            </div>
          </div>
          {/* text */}
        </div>
      </Card>
    </>
  );
}
