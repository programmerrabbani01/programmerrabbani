import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav.tsx";
import DarkLight from "@/components/DarkLight/DarkLight.tsx";
import StaticSidebar from "@/components/StaticSidebar/StaticSidebar.tsx";

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
      <body className={`${bricolage.className}`}>
        <DarkLight>
          <ResponsiveNav />
          <div className="my_container">
            <div className="xl:flex xl:items-start xl:space-x-6 xl:pt-[80px] lg:pt-[60px] md:pt-[60px] sm:pt-[60px] pt-[60px]">
              <div className="xl:w-1/3 w-full mt-6">
                <StaticSidebar />
              </div>
              <div className="xl:w-2/3 w-full mt-6">{children}</div>
            </div>
          </div>
        </DarkLight>
      </body>
    </html>
  );
}
