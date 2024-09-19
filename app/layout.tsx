import type { Metadata } from "next";
import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import ResponsiveNav from "@/components/NavBar/ResponsiveNav.tsx";
import DarkLight from "@/components/DarkLight/DarkLight.tsx";

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
        </DarkLight>
      </body>
    </html>
  );
}
