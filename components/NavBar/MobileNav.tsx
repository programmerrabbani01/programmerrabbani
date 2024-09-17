"use client";

import Link from "next/link.js";
import blackLogo from "@/public/images/blacklogo.png";
import whiteLogo from "@/public/images/whitelogo.png";
import {
  IconBrandAppleArcade,
  IconBrandSkype,
  IconDeviceMobileVibration,
  IconMessage,
  IconPencilHeart,
  IconSmartHome,
  IconUserCircle,
} from "@tabler/icons-react";
import DarkModeSwitch from "../DarkLightSwitch/DarkLightSwitch.tsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

// defiend props
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const navLinks = [
  {
    id: 1,
    label: "Home",
    url: "/",
    icon: <IconSmartHome stroke={2} className="mr-[4px] " />,
  },
  {
    id: 2,
    label: "About",
    url: "/about",
    icon: <IconUserCircle stroke={2} className="mr-[4px] " />,
  },
  {
    id: 3,
    label: "Services",
    url: "/services",
    icon: <IconDeviceMobileVibration stroke={2} className="mr-[4px] " />,
  },
  {
    id: 4,
    label: "Portfolio",
    url: "/portfolio",
    icon: <IconBrandAppleArcade stroke={2} className="mr-[4px] " />,
  },
  {
    id: 5,
    label: "Blog",
    url: "/blog",
    icon: <IconPencilHeart stroke={2} className="mr-[4px] " />,
  },
  {
    id: 6,
    label: "Contacts",
    url: "/contact",
    icon: <IconMessage stroke={2} className="mr-[4px] " />,
  },
];
export default function MobileNav({ showNav, closeNav }: Props) {
  const pathname = usePathname();
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeNav();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeNav]);

  // dark mode
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  return (
    <>
      <div
        className={`mobile_nav_overlay ${navOpen} transform transition-all duration-500 inset-0  bg-black opacity-70  xl:hidden`}
      ></div>
      <div
        ref={navRef}
        className={`fixed top-0 left-0 text-white ${navOpen} transform transition-transform duration-300 flex flex-col h-screen dark:bg-black  bg-[#fff] space-y-2  overflow-y-auto p-6 xl:hidden mobile_nav `}
      >
        <div className="logo xl:w-32 pb-[24px]">
          <Link href="/">
            <Image
              src={currentTheme === "dark" ? whiteLogo : blackLogo}
              alt="blackLogo"
              className="w-[197px] object-cover overflow-hidden logo"
            />
          </Link>
        </div>
        {navLinks.map((nav) => {
          const isActive = pathname === nav.url;
          return (
            <Link
              href={nav.url}
              key={nav.id}
              className={`group flex items-center gap-[.25rem]  text-[#576076] leading-[120%] rounded-lg py-[10px] px-[12px] transition-all duration-300 ${
                isActive
                  ? currentTheme === "dark"
                    ? "my_active_dark"
                    : "my_active"
                  : currentTheme === "dark"
                  ? "my_link_hover_dark"
                  : "my_link_hover"
              } `}
            >
              {nav.icon}
              <p className="nav_font">{nav.label}</p>
            </Link>
          );
        })}
        {/* dark light button */}
        <div className="flex flex-col pt-[26px]">
          <button className="w-[40px] h-[40px] rounded-[5px] bg-transparent flex justify-center items-center transition-all hover:bg-[#F0F2F5 dark:hover:bg-[#0E1018] mb-3">
            {/* <FaMoon /> */}
            <DarkModeSwitch />
          </button>
          <Link
            href=""
            className="bg-[#1a1f2c] rounded-[8px] py-[16px] px-[24px] text-[16px] leading-[1.2em] font-semibold text-white flex items-center hover:bg-[#4770ff] transition-all duration-300 w-fit"
          >
            Let's Talk
            <IconBrandSkype stroke={2} className="ml-[8px]" />
          </Link>
        </div>
      </div>
    </>
  );
}
