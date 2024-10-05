import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
// import { Bricolage_Grotesque } from "next/font/google";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav.tsx";
import DarkLight from "@/components/DarkLight/DarkLight.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimationCursor from "@/components/AnimationCursor/AnimationCursor.tsx";

// Define Helvetica font family
const BricolageGrotesque = localFont({
  src: [
    {
      path: "./fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
      weight: "400", // normal
      style: "normal",
    },
    {
      path: "./fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
      weight: "500", // medium
      style: "normal",
    },
    {
      path: "./fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf",
      weight: "600", // semibold
      style: "normal",
    },
  ],
  variable: "--font-bricolageGrotesque",
});

export const metadata: Metadata = {
  title: "Programmerrabbani",
  description:
    "👋 Hi, I'm Programmer Rabbani, a Full-Stack MERN Developer passionate about crafting scalable and feature-rich web applications. My expertise lies in building dynamic, user-friendly interfaces with React and Next.js, powered by the robust back-end logic of Node.js, Express.js, and Prisma. Whether integrating MongoDB or MySQL for seamless data management, I create solutions that efficiently handle data flow and user interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom_scrollBar">
      <body
        className={`${BricolageGrotesque.variable} font-bricolageGrotesque select-none`}
      >
        <div className="hidden md:block">
          <AnimationCursor />
        </div>
        <DarkLight>
          <ResponsiveNav />
          {children}
          <Footer />
        </DarkLight>
      </body>
    </html>
  );
}
