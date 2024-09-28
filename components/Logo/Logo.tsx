import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import blackLogo from "@/public/images/blacklogo.png";
import whiteLogo from "@/public/images/whitelogo.png";

type Props = {};

export default function Logo({}: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        src={whiteLogo}
        alt="logo"
        className="xl:w-[130px] w-40 object-cover overflow-hidden"
      />
    );

  const currentTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  return (
    <>
      {" "}
      <div className="logo xl:w-32">
        <Link href="/">
          <Image
            src={currentTheme === "dark" ? whiteLogo : blackLogo}
            alt="logo"
            className="xl:w-[130px] w-40 object-cover overflow-hidden"
          />
        </Link>
      </div>
    </>
  );
}
