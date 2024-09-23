import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav.tsx";
import DarkLight from "@/components/DarkLight/DarkLight.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bricolage = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
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
      <body className={`${bricolage.className} select-none`}>
        <DarkLight>
          <ResponsiveNav />
          {children}
          <Footer />
        </DarkLight>
      </body>
    </html>
  );
}
