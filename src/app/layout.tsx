import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BodyContent from "./_components/bodyContent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "J.HIROTANI LAB",
  description: "Welcome to J.HIROTANI Webpage!",
  openGraph: {
    images: ["./_images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BodyContent child={children} />
      </body>
    </html>
  );
}
