"use client";
import Link from "next/link";
import LogoImage from "../_images/Unknown.png";
import Image from "next/image";
import { useState } from "react";

import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export function Header({
  propOpenMenu,
  propCloseMenu,
}: {
  propOpenMenu: () => void;
  propCloseMenu: () => void;
}) {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const openMobileMenu = () => {
    if (typeof document !== "undefined") {
      const scrollTargetElement =
        document.querySelector<HTMLElement>("#headerComponent");
      if (scrollTargetElement) {
        disableBodyScroll(scrollTargetElement);
      }
    }
    setIsOpenMobileMenu(true);
    propOpenMenu();
  };
  const closeMobileMenu = () => {
    clearAllBodyScrollLocks();
    setIsOpenMobileMenu(false);
    propCloseMenu();
  };
  return (
    <>
      {/* PC版 */}
      <div className="fixed w-full flex justify-center z-50">
        <div className="hidden lg:flex w-full flex-row px-20 py-4 bg-gray-900 bg-opacity-90 text-white items-center justify-between justify-self-senter">
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
      {/* スマホ・タブレット版 */}

      <div className="lg:hidden fixed top-0 z-20 navbar bg-base-100 text-blue-700">
        <div className="navbar-start pl-6">
          <Link href="/">
            <Image
              src={LogoImage}
              alt="Logo"
              width={120}
              height={10}
              className="w-48 md:w-36"
            />
          </Link>
        </div>
        <div className="navbar-end pr-4">
          <button
            className="flex flex-col items-center border rounded-full p-2 shadow-lg w-12 h-12 md:w-16 md:h-16"
            onClick={openMobileMenu}
          >
            <Bars3Icon className="w-6 h-6 md:w-9 md:h-9" />
            <span className="text-[8px] md:text-xs">MENU</span>
          </button>
          <MobileDrawer isOpen={isOpenMobileMenu} onClose={closeMobileMenu} />
        </div>
      </div>
    </>
  );
}

function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed flex flex-col gap-4 p-2 justify-start z-20 top-0 right-0 w-full h-auto bg-[#1C4995] text-white transition-transform duration-500 transform ${
        isOpen ? "-translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row items-center justify-between pl-6">
        <Image
          src={LogoImage}
          alt="Logo"
          width={120}
          height={50}
          className="w-48 md:w-36"
        />
        <div className="pr-4">
          <button
            className="flex flex-col items-center border rounded-full p-2 shadow-lg w-12 h-12 md:w-16 md:h-16"
            onClick={onClose}
          >
            <XMarkIcon className="w-7 h-7 md:w-9 md:h-9" />
            <span className="text-[12px] md:text-xs">close</span>
          </button>
        </div>
      </div>
      <ul className="flex flex-col gap-2 md:gap-8 px-6">
        <MenuLi label="Home" url="/" onClose={onClose} />
        <MenuLi label="Research" url="/research" onClose={onClose} />
        <MenuLi label="News" url="/news" onClose={onClose} />
        <MenuLi label="Publications" url="/publications" onClose={onClose} />
        <MenuLi label="Member" url="/member" onClose={onClose} />
        <MenuLi label="Contact" url="/contact" onClose={onClose} />
      </ul>
      {/* <button className="btn w-4/5 self-center"><Link href="/download">資料請求</Link></button> */}
      <div className="flex flex-col gap-4">
        <button
          className="btn w-4/5 self-center mb-4 bg-blue-400 text-white md:text-xl border-none"
          onClick={onClose}
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}
function MenuLi({
  label,
  url,
  onClose,
}: {
  label: string;
  url: string;
  onClose: () => void;
}) {
  return (
    <li
      className="text-lg md:text-2xl hover:text-blue-900 hover:font-semibold"
      onClick={onClose}
    >
      <Link href={url}>{label}</Link>
    </li>
  );
}
