"use client";
import type React from "react";
import { useState } from "react";
import { Header } from "./header";
import Image from "next/image";
import LogoImage from "../_images/Unknown.png";

type Props = {
  child: React.ReactNode;
};

export default function BodyContent({ child }: Props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="flex justify-center">
          <Header
            propOpenMenu={() => setIsOpenMenu(true)}
            propCloseMenu={() => setIsOpenMenu(false)}
          />
        </div>
        {/* <div>{child}</div> */}
      </div>
      <div className="h-screen bg-white font-sans">
        {child}
        {/* ここからフッター */}
        <div className="hidden p-20 w-full bg-gray-900 text-white mt-32 lg:flex lg:flex-row items-center">
          <div className="flex flex-col gap-6 w-1/2">
            <Image src={LogoImage} alt="logo" className="w-2/3" />
            <div className="text-xs">© J.HIROTANI GROUP, 2024</div>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <div className="text-xl">Contact Information for Jun Hirotani</div>
            <div>E-mail : hirotani.jun.7v@kyoto-u.ac.jp</div>
            <div>
              Access : Kyoto University, Katsura Campus, Bldg. No. C3, Room S14,
              Nishikyo-Ku, Kyoto, JAPAN
            </div>
          </div>
        </div>
        <div className="p-10 w-full bg-gray-900 text-white mt-32 flex lg:hidden flex-col gap-6 items-center">
          <div className="flex flex-col gap-6 w-full items-center">
            <Image src={LogoImage} alt="logo" className="w-2/3 md:w-1/2" />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <div className="text-lg">Contact Information for Jun Hirotani</div>
            <div>E-mail : hirotani.jun.7v@kyoto-u.ac.jp</div>
            <div>
              Access : Kyoto University, Katsura Campus, Bldg. No. C3, Room S14,
              Nishikyo-Ku, Kyoto, JAPAN
            </div>
          </div>
          <div className="text-xs">© J.HIROTANI GROUP, 2024</div>{" "}
        </div>
        {/* ここまでフッター */}
      </div>
      <div
        className={`${
          isOpenMenu ? "fixed opacity-100" : "fixed opacity-0 invisible"
        } block w-screen h-screen top-0 left-0 z-10 bg-[rgba(3,3,3,.5)] transition ease-in-out duration-300`}
      />
    </div>
  );
}
