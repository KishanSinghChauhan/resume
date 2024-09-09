import type { Metadata } from "next";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Muskaan Verma",
  description: "Know more about myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><ThemeModeScript /></head>
      <body
        className={` antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
