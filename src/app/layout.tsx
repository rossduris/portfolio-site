import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} flex flex-col `}>
        <nav className="flex justify-around bg-[#f5f5f5] p-2 text-xs text-gray-800 ">
          <div className="w-[60%] flex justify-around">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/about">Projects</a>
            <a href="/about">Contact</a>
          </div>
          <div>GitHub</div>
        </nav>
        {children}
        <footer className=" w-full flex p-10">Footer</footer>
      </body>
    </html>
  );
}
