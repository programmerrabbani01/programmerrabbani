"use client";

import Image from "next/image";
import React from "react";
import profile from "@/public/images/hero.png";
import Link from "next/link";
import { IconBrandSkype, IconCopy, IconDownload } from "@tabler/icons-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaYoutube,
} from "react-icons/fa";
import Swal from "sweetalert2";

type Props = {};

const socialLinks = [
  {
    id: 1,
    url: "https://github.com/programmerrabbani01",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/programmerrabbani/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://wa.link/yryvca",
    icon: <FaWhatsappSquare />,
  },
  {
    id: 4,
    url: "",
    icon: <FaYoutube />,
  },
];

export default function StaticSidebar({}: Props) {
  const email = "programmerrabbani@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Copied!",
          text: "Email copied successful 🙂.",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Could not copy email!",
          footer: err,
        });
      }
    );
  };

  return (
    <>
      <div className=" bg-white dark:bg-black card_shadow h-full border-none rounded-2xl">
        <div className="p-6">
          {/* image */}
          <div className="bg-myBgLight dark:bg-myBgDark rounded-lg overflow-hidden text-center">
            <Image
              src={profile}
              alt="profile"
              className="xl:w-[265px] lg:w-[426px] md:w-[311px] mt-[10px] object-cover  mx-auto profile_image"
            />
          </div>
          {/* text */}
          <div className="mt-6">
            <h3 className="text-2xl mb-2 dark:text_bg font-semibold leading-[1.333em]">
              Programmer Rabbani 👋
            </h3>
            <p className="mt-2 text-myGray dark:text-white sm:text-base text-sm leading-[1.5em] font-medium text-justify ">
              I transform ideas into custom web solutions that engage your
              audience. Services include &nbsp;
              <b className="text-black dark:text-white ">
                full stack development, responsive design, React/Next.js, API
                integration, Git, clean code, debugging, and NPM package &nbsp;
              </b>
              Creation.
            </p>
            {/* button */}
            <div className="mt-6 flex items-center flex-wrap xl:flex-nowrap xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-2 gap-2">
              <Link
                href="https://join.skype.com/invite/tgCbJLbOkYD8"
                target="_blank"
                className="py-4 px-6 xl:px-[13px] text-base xl:text-[14px] bg-myPrimary rounded-lg font-medium leading-[1.5em] text-white hover:bg-myHoverPrimary transition-all duration-300 flex items-center call_btn"
              >
                <IconBrandSkype stroke={2} className="mr-2" />
                Make A Call
              </Link>
              <button
                onClick={copyEmailToClipboard}
                className="py-4 px-6 xl:px-[13px] text-base xl:text-[14px] rounded-lg font-medium leading-[1.5em] bg-transparent hover:bg-myBgLight dark:hover:bg-myBgDarkTwo dark:hover:text-white transition-all duration-300 border border-myBorder dark:border-myBgDarkTwo text-myBgDarkTwo dark:text-myRgbaLight flex items-center email_btn"
              >
                <IconCopy stroke={2} className="mr-2" />
                Copy Email
              </button>
            </div>
            {/* cv Button */}
            <button className="py-4 px-6 xl:px-[13px] text-base sm:text-lg rounded-lg font-medium leading-[1.5em] bg-transparent hover:bg-myBgLight dark:hover:bg-myBgDarkTwo dark:hover:text-white transition-all duration-300 border border-myBorder dark:border-myBgDarkTwo text-myBgDarkTwo dark:text-myRgbaLight flex items-center mt-2 ">
              Download Resume
              <IconDownload stroke={2} className="ml-2" />
            </button>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
