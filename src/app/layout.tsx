import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import LogoImage from "./_images/Unknown.png";
import Link from "next/link";

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
        {/* ここからヘッダー */}
        <div className="fixed w-full flex justify-center z-10">
          <div className="flex w-full flex-row px-20 py-4 bg-gray-900 bg-opacity-90 text-white items-center justify-between justify-self-senter">
            <Link href={"/"}>
              <Image src={LogoImage} alt="logo" className="w-64" />
            </Link>
            <div>
              <div className="flex flex-row gap-8 pr-20 text-lg">
                <Link href={"/research"} className="hover:text-blue-300">
                  Research
                </Link>
                <Link href={"/news"} className="hover:text-blue-300">
                  News
                </Link>
                <Link href={"/publications"} className="hover:text-blue-300">
                  Publications
                </Link>
                <Link href={"/member"} className="hover:text-blue-300">
                  Member
                </Link>
                <Link href={"/contact"} className="hover:text-blue-300">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* ここまでヘッダー */}

        {/* ここからメイン */}
        <div className="h-screen bg-white font-sans">
          {children}
          {/* ここからフッター */}
          <div className="p-20 w-full bg-gray-900 text-white mt-32 flex flex-row items-center">
            <div className="flex flex-col gap-6 w-1/2">
              <Image src={LogoImage} alt="logo" className="w-2/3" />
              <div className="text-xs">© J.HIROTANI GROUP, 2024</div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <div className="text-xl">
                Contact Information for Jun Hirotani
              </div>
              <div>E-mail : hirotani.jun.7v@kyoto-u.ac.jp</div>
              <div>
                Access : Kyoto University, Katsura Campus, Bldg. No. C3, Room
                S14, Saikyo-Ku, Kyoto, JAPAN
              </div>
            </div>
          </div>
          {/* ここまでフッター */}
        </div>
        {/* ここまでメイン */}
      </body>
    </html>
  );
}
