"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import blackLogo from "@/public/images/blacklogo.png";
import whiteLogo from "@/public/images/whitelogo.png";
import Image from "next/image";
import {
  IconArrowElbowRight,
  IconBrandAppleArcade,
  IconDeviceMobileVibration,
  IconMenu2,
  IconMessage,
  IconPencilHeart,
  IconSmartHome,
  IconUserCircle,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import DarkModeSwitch from "../DarkLightSwitch/DarkLightSwitch.tsx";
import { useTheme } from "next-themes";

type Props = {
  openNav: () => void;
};

const navLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
    icon: <IconSmartHome stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 2,
    label: "About",
    url: "/about",
    icon: <IconUserCircle stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 3,
    label: "Services",
    url: "/services",
    icon: <IconDeviceMobileVibration stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 4,
    label: "Portfolio",
    url: "/portfolio",
    icon: <IconBrandAppleArcade stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 5,
    label: "Blog",
    url: "/blog",
    icon: <IconPencilHeart stroke={2} className="mr-[4px] icon" />,
  },
  {
    id: 6,
    label: "Contacts",
    url: "/contact",
    icon: <IconMessage stroke={2} className="mr-[4px] icon" />,
  },
];

export default function NavBar({ openNav }: Props) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) return null;

  const currentTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

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
            <div className="logo xl:w-32">
              <Link href="/">
                <Image
                  src={currentTheme === "dark" ? whiteLogo : blackLogo}
                  alt="logo"
                  className="xl:w-[130px] w-40 object-cover overflow-hidden"
                />
              </Link>
            </div>

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
                        ? currentTheme === "dark"
                          ? "my_active_dark"
                          : "my_active"
                        : currentTheme === "dark"
                        ? "my_link_hover_dark"
                        : "my_link_hover"
                    }`}
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
                  href=""
                  className="bg-[#1a1f2c] rounded-[8px] py-[16px] px-[24px] text-[16px] leading-[1.2em] font-semibold text-white ml-4 flex items-center hover:bg-[#4770ff] transition-all duration-300"
                >
                  Let's Talk
                  <IconArrowElbowRight stroke={2} className="ml-[8px]" />
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
