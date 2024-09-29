"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import DarkModeSwitch from "../DarkLightSwitch/DarkLightSwitch.tsx";

import { navLinks } from "@/data/Data.tsx";
import { IconBrandSkype, IconMenu2 } from "@tabler/icons-react";
import Logo from "../Logo/Logo.tsx";

type Props = {
  openNav: () => void;
};

export default function NavBar({ openNav }: Props) {
  const pathname = usePathname();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Debounce function to limit scroll event calls
    const debounce = (func: () => void, wait: number) => {
      let timeout: NodeJS.Timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func();
        }, wait);
      };
    };

    const handleScroll = debounce(() => {
      setScrollY(window.scrollY);
    }, 10); // Set a small wait time for debouncing

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <>
      <div
        className={`z-50 w-full fixed ${
          isScrolled ? "top-0" : ""
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="my_container transition-all duration-300">
          {/* nav bar */}
          <div
            className={`menu_container_dark bg-white w-full flex xl:items-center xl:gap-[15px] items-center justify-between dark:bg-black dark:text-white rounded-2xl transition-all duration-300`}
          >
            {/* logo */}
            <Logo />

            {/* navbar links */}
            <div className="hidden xl:flex xl:flex-grow items-center gap-[11px] nav_gap">
              {navLinks.map((nav) => {
                const isActive = pathname === nav.url;
                return (
                  <Link
                    href={nav.url}
                    key={nav.id}
                    className={`group flex items-center gap-[.25rem] xl:text-[16px] xl:font-medium text-[#576076] leading-[120%] rounded-lg py-[10px] px-[12px] transition-all duration-300 ${
                      isActive
                        ? " my_active_dark my_active"
                        : "my_link_hover_dark my_link_hover"
                    } `}
                  >
                    {nav.icon}
                    <p className="nav_font">{nav.label}</p>
                  </Link>
                );
              })}

              {/* dark mode switch & call to action */}
              <div className="flex items-center">
                <button className="w-[40px] h-[40px] rounded-[5px] bg-transparent flex justify-center items-center transition-all dark:hover:bg-[#0E1018] hover:bg-[#F0F2F5]">
                  <DarkModeSwitch />
                </button>
                <Link
                  href="https://join.skype.com/invite/tgCbJLbOkYD8"
                  target="_blank"
                  className="bg-[#1a1f2c] rounded-[8px] py-[16px] px-[24px] text-[16px] leading-[1.2em] font-semibold text-white dark:text-blue-500 ml-4 flex items-center hover:bg-[#4770ff] dark:hover:text-white transition-all duration-300"
                >
                  Let's Talk
                  <IconBrandSkype stroke={2} className="ml-[8px]" />
                </Link>
              </div>
            </div>

            {/* mobile menu */}
            <IconMenu2
              stroke={2}
              onClick={openNav}
              className="xl:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
