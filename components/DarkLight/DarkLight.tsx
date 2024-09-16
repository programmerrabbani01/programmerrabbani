import { ThemeProvider } from "next-themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function DarkLight({ children }: Props) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className=" bg-gradient-to-tl from-[#D7C8ED] via-[#E9D9DD] to-[#EFEFF2] dark:from-[#2E213C] dark:via-[#26264E] dark:to-[#17192E] h-screen py-[24px]">
        {children}
      </div>
    </ThemeProvider>
  );
}
