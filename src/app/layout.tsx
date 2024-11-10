import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ross Duris",
  description: "Personal website for Ross Duris",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` flex flex-col justify-center items-center `}>
        <Header />
        {children}
        <footer className=" w-full flex p-10">Footer</footer>
      </body>
    </html>
  );
}
