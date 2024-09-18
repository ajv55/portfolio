import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import ToasterContext from "./context/ToasterProvider";

const roboto = Roboto({weight: '400', subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Portfolio | Abel Villareal - Web Developer",
  description: "Welcome to Abel Villareal's portfolio. A self-taught web developer proficient in JavaScript, TypeScript, React, Next.js, and more. Explore my projects, skills, and experience in building modern web applications with animations, responsive design, and dynamic features.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
