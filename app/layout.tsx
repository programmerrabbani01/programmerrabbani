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
  description: "This is my portfolio created by Next JS 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BricolageGrotesque.variable} font-bricolageGrotesque select-none`}
      >
        <DarkLight>
          <ResponsiveNav />
          {children}
          <Footer />
        </DarkLight>
      </body>
    </html>
  );
}
