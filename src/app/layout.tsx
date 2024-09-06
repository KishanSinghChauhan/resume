import type { Metadata } from "next";
import "./globals.css";


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
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
