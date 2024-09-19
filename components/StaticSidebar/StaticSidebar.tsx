import Image from "next/image";
import React from "react";
import profile from "@/public/images/hero.png";
import Link from "next/link";
import { IconCopy, IconPhoneCall } from "@tabler/icons-react";
import { FaFacebook, FaGithub, FaPinterest, FaYoutube } from "react-icons/fa";

type Props = {};

const socialLinks = [
  {
    id: 1,
    url: "",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "",
    icon: <FaPinterest />,
  },
  {
    id: 3,
    url: "",
    icon: <FaGithub />,
  },
  {
    id: 4,
    url: "",
    icon: <FaYoutube />,
  },
];

export default function StaticSidebar({}: Props) {
  return (
    <>
      <div className=" bg-white dark:bg-black card_shadow h-full border-none rounded-2xl">
        <div className="p-6">
          {/* image */}
          <div className="bg-[#f0f2f5] dark:bg-[#0e1018] rounded-lg overflow-hidden text-center">
            <Image
              src={profile}
              alt="profile"
              className="xl:w-[265px] lg:w-[426px] md:w-[311px] mt-[10px] object-cover  mx-auto profile_image"
            />
          </div>
          {/* text */}
          <div className="mt-6">
            <h3 className="text-2xl mb-2 font-semibold leading-[1.333em]">
              Programmer Rabbani 👋
            </h3>
            <p className="mt-2 text-[#576076] dark:text-[rgba(240,242,245,.7)] text-base leading-[1.5em] font-medium">
              A Passionate &nbsp;
              <span className="font-semibold dark:text-white text-[#1a1f2c]">
                Full Stack Developer &nbsp;
              </span>
              🖥️ &amp; &nbsp;
              {/* <span className="font-semibold dark:text-white text-[#1a1f2c]">
                Product Designer &nbsp;
              </span>
              having&nbsp; */}
              Specializing in &nbsp;
              <span className="font-semibold dark:text-white text-[#1a1f2c]">
                MongoDB, Express, React, Node.js, Next.js, Redux Toolkit &nbsp;
              </span>
              and more.
            </p>
            {/* button */}
            <div className="mt-6 flex items-center flex-wrap xl:flex-nowrap xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-2 gap-2">
              <button className="py-4 px-6 xl:px-[13px] text-base xl:text-[14px] bg-[#4770ff] rounded-lg font-medium leading-[1.5em] text-white hover:bg-[#2563eb] transition-all duration-300 flex items-center call_btn">
                <IconPhoneCall stroke={2} className="mr-2" />
                Book A call
              </button>
              <button className="py-4 px-6 xl:px-[13px] text-base xl:text-[14px] rounded-lg font-medium leading-[1.5em] bg-transparent hover:bg-[#f0f2f5] dark:hover:bg-[#1a1f2c] dark:hover:text-white transition-all duration-300 border border-[#dbdfe5] dark:border-[#1a1f2c] text-[#1a1f2c] dark:text-[rgba(240,242,245,.7)] flex items-center email_btn">
                <IconCopy stroke={2} className="mr-2" />
                Copy Email
              </button>
            </div>
            {/* social icon */}
            <div className="mt-[30px]">
              <ul className="list-none">
                {socialLinks.map((social) => {
                  return (
                    <li
                      key={social.id}
                      className="inline-block mr-[6px] rounded-lg border border-[#dbdfe5] dark:border-none dark:bg-[#0e1018]"
                    >
                      <Link
                        href={social.url}
                        className="text-xl text-center flex items-center justify-center leading-10 w-10 h-10 dark:text-[#64748b] dark:hover:text-[#4770ff]"
                      >
                        {social.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
