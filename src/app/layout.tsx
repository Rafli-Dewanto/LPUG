import FabArrowUp from "@/components/fab-up";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LPUG",
  description: "Lembaga Pengembangan Universitas Gunadarma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FabArrowUp />
      </body>
    </html>
  );
}
