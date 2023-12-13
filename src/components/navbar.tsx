"use client";
import React, { FC, Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { TiArrowSortedDown } from "react-icons/ti";

import logo from "../../public/images/logo.png";
import blockChainLogo from "../../public/images/blockChain/blockchainicon.png";
import webapplicatiniconLogo from "../../public/images/blockChain/webapplicatinicon.jpg";
import ecommerceiconLogo from "../../public/images/blockChain/ecommerceicon.jpg";
import aiIconLogo from "../../public/images/blockChain/aiIcon.jpeg";
import Image, { StaticImageData } from "next/image";
import DropDown from "./home/dropDown";
import Link from "next/link";


type data = {
  image: StaticImageData
}
const dataList: data[] = [{ image: blockChainLogo }, { image: webapplicatiniconLogo }, { image: ecommerceiconLogo }, { image: aiIconLogo }]
interface ServicesList {
  name: string;
  description: string;
  href: string;
  icon: FC;
}

interface BlockChaninList {
  name: string;
  href: string;
  icon: FC;
}
interface NFTList {
  name: string;
  description: string;
  href: string;
  icon: FC;
}

const servicesList: ServicesList[] = [
  {
    name: "Web Application",
    description: "Speak directly to your customers",
    href: "/web-application",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "E-Commerce",
    description: "Your customers’ data will be safe and secure",
    href: "/e-commerce-solution",
    icon: FingerPrintIcon,
  },
  {
    name: "Artificial Intelligence",
    description: "Your customers’ data will be safe and secure",
    href: "/artificial-intelligence",
    icon: FingerPrintIcon,
  },
];
const nftList: NFTList[] = [
  {
    name: "NFT Development",
    description: "Speak directly to your customers",
    href: "/nft-development",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "NFT Marketplace Development",
    description: "Your customers’ data will be safe and secure",
    href: "/nft-marketplace-development",
    icon: FingerPrintIcon,
  },
];

const blockChaninList: BlockChaninList[] = [
  { name: "DeFI", href: "/defi", icon: PhoneIcon },
  {
    name: "Cryptocurrency Exchange",
    href: "/cryptocurrency-exchange",
    icon: PhoneIcon,
  },
  { name: "Token Development", href: "/token-development", icon: PhoneIcon },
];

interface NavbarProps { }

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [checkClick, setCheckClick] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const servicesHandler = () => {
    setCheckClick(!checkClick);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setCheckClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [checkClick]);


  return (
    <header className="bg-white sticky top-0 z-40">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 gap-3 items-center ">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Services</span>
            <Image
              className=" w-auto hidden md:block"
              src={logo}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <Link
            href="/"
            className="text-sky-600 text-[23px] -ml-2 md:m-0 md:text-[30px] font-semibold md:font-bold"
          >
            BawdicSoft
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]  focus:text-black focus:border-none"
          >
            Home
          </Link>
          {/* <DropDown /> */}
          <button
            onClick={servicesHandler}
            id="mega-menu-dropdown-button"
            data-dropdown-toggle="mega-menu-dropdown"
            className="flex items-center justify-between  w-full py-2 px-3 border-b border-gray-100 md:w-auto  text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]  md:border-0  lg:p-0   focus:text-black focus:border-none    "
          >
            Services{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4" />
            </svg>
          </button>
          {checkClick && (
            <div
              ref={dropdownRef}
              id="mega-menu-dropdown"
              className="absolute z-10 grid  gap-16 lg:w-[950px] xl:w-[1200px] grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md  md:grid-cols-3 lg:grid-cols-4  mt-10 pb-10 left-1/2 transform -translate-x-1/2 max-w-7xl ">

                {/* Blockchain Section */}
              <div className="pt-4 pl-4 text-gray-900 md:pb-4 ">
                <div
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button">
                  <div className="flex-wrap flex flex-col gap-2 items-center">
                    <div className="relative px-2 flex-wrap flex-col flex">
                      <div className="px-2 font-bold leading-6 text-sky-700 py-4">
                        Blockchain
                      </div>
                      <div className="ml-6">

                        <div className="flex items-start font-semibold text-sky-700">
                          <svg className="pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path fill="#90caf9" d="M26.535,9.368l-13.938,8.047c-0.907,0.523-1.465,1.491-1.465,2.538l0,16.094 c0,1.047,0.558,2.014,1.465,2.538l13.938,8.047c0.907,0.523,2.024,0.523,2.93,0l13.938-8.047c0.907-0.523,1.465-1.491,1.465-2.538 V19.953c0-1.047-0.558-2.014-1.465-2.538L29.465,9.368C28.558,8.845,27.442,8.845,26.535,9.368z" /><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M36.024,37l3.746-2.163c0.928-0.536,1.5-1.526,1.5-2.598l0-16.478c0-1.072-0.572-2.062-1.5-2.598L25.5,4.924 c-0.928-0.536-2.072-0.536-3,0l-4.962,2.865" /><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M11.614,11.209L8.23,13.163c-0.928,0.536-1.5,1.526-1.5,2.598l0,16.478c0,1.072,0.572,2.062,1.5,2.598l14.27,8.239 c0.928,0.536,2.072,0.536,3,0l4.163-2.404" /><path fill="#18193f" d="M26.28,19.016h-3.738c-0.688,0-1.246,0.558-1.246,1.246v7.476c0,0.688,0.558,1.246,1.246,1.246 s1.246-0.558,1.246-1.246v-2.492h1.869c0.688,0,1.246-0.558,1.246-1.246s-0.558-1.246-1.246-1.246h-1.869v-1.246h2.492 c0.688,0,1.246-0.558,1.246-1.246S26.968,19.016,26.28,19.016z" /><path fill="#18193f" d="M17.273,19.016c-0.688,0-1.246,0.558-1.246,1.246v3.361l-2.701-4.052 c-0.305-0.458-0.873-0.661-1.398-0.501c-0.526,0.159-0.885,0.644-0.885,1.193v7.476c0,0.688,0.558,1.246,1.246,1.246 s1.246-0.558,1.246-1.246v-3.361l2.701,4.052c0.235,0.353,0.628,0.555,1.037,0.555c0.12,0,0.242-0.017,0.361-0.054 c0.526-0.159,0.885-0.644,0.885-1.193v-7.476C18.519,19.574,17.961,19.016,17.273,19.016z" /><path fill="#18193f" d="M35.711,19.016h-4.984c-0.688,0-1.246,0.558-1.246,1.246s0.558,1.246,1.246,1.246h1.246v6.23 c0,0.688,0.558,1.246,1.246,1.246s1.246-0.558,1.246-1.246v-6.23h1.246c0.688,0,1.246-0.558,1.246-1.246S36.4,19.016,35.711,19.016 z" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>NFT</h3>
                            <div className="flex flex-wrap xl:flex-nowrap text-gray-700  ">
                              <Link
                                href="/nft-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium  flex items-start"
                                onClick={servicesHandler}>
                                Development,
                              </Link>
                              <Link
                                href="/nft-marketplace-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium pl-0 xl:pl-2 flex items-start"
                                onClick={servicesHandler}>
                                Marketplace
                              </Link>
                            </div>
                          </div>
                        </div>


                        <div className="my-6 flex items-start font-semibold text-sky-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="27px" height="27px"><path fill="#90caf9" d="M43.9,43.9H12.1c-2.3,0-4.1-1.8-4.1-4.1V16.2c0-2.3,1.8-4.1,4.1-4.1h31.8c2.3,0,4.1,1.8,4.1,4.1v23.6 C48,42.1,46.2,43.9,43.9,43.9z" /><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M43.5,32.4v3.1c0,2.2-1.8,4-4,4h-31c-2.2,0-4-1.8-4-4V22.7" /><path fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4.5,16.3v-3.8c0-2.2,1.8-4,4-4h31c2.2,0,4,1.8,4,4v14.9" /><circle cx="13" cy="18" r="2" fill="#18193f" /><circle cx="35" cy="18" r="2" fill="#18193f" /><line x1="15.5" x2="32.5" y1="33.5" y2="33.5" fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><path fill="none" stroke="#18193f" strokeLinecap="round" strokeWidth="3" d="M22.3,22l2.1,0c1.1,0,1.9-0.9,1.9-2l0,0c0-1.1-0.9-2-2-2h-0.9c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-1.9,1.9-2l1.5,0" /><line x1="23.7" x2="23.7" y1="13" y2="13.9" fill="none" stroke="#18193f" strokeLinecap="round" strokeWidth="3" /><line x1="23.7" x2="23.7" y1="23.2" y2="22.2" fill="none" stroke="#18193f" strokeLinecap="round" strokeWidth="3" /><line x1="12.5" x2="35.5" y1="28.5" y2="28.5" fill="none" stroke="#18193f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>DeFI</h3>
                            {/* <Link
                          href="/defi"
                          className="leading-4 font-semibold text-sky-700  hover:text-black flex items-center"
                          onClick={servicesHandler}>
                          DeFI
                        </Link> */}
                          </div>
                        </div>

                        <div className="flex items-start font-semibold text-sky-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="28px" height="28px"><circle cx="89" cy="89" r="35" fill="#fff" /><circle cx="39" cy="39" r="35" fill="#90caf9" /><path fill="#90caf9" d="M39,77C18.05,77,1,59.95,1,39S18.05,1,39,1s38,17.05,38,38S59.95,77,39,77z M39,7C21.36,7,7,21.35,7,39 s14.36,32,32,32s32-14.35,32-32S56.64,7,39,7z" /><path fill="#90caf9" d="M89,127c-20.95,0-38-17.05-38-38c0-1.22,0.06-2.45,0.17-3.66c0.16-1.65,1.64-2.85,3.27-2.7 c1.65,0.16,2.86,1.62,2.7,3.27C57.05,86.93,57,87.97,57,89c0,17.65,14.36,32,32,32s32-14.35,32-32s-14.36-32-32-32 c-1.04,0-2.09,0.05-3.11,0.15c-1.64,0.16-3.12-1.05-3.27-2.7s1.05-3.12,2.7-3.27C86.53,51.06,87.77,51,89,51 c20.95,0,38,17.05,38,38S109.95,127,89,127z" /><path fill="#18193f" d="M124,3c-1.66,0-3,1.34-3,3v14.19C112.8,12.27,99.79,4,83.58,0.67C81.96,0.33,80.38,1.38,80.04,3 c-0.33,1.62,0.71,3.21,2.33,3.54C97.65,9.69,109.98,17.78,117.32,25H102c-1.66,0-3,1.34-3,3s1.34,3,3,3h22c1.66,0,3-1.34,3-3V6 C127,4.34,125.66,3,124,3z" /><path fill="#18193f" d="M45.62,121.46c-15.27-3.14-27.6-11.23-34.94-18.46H26c1.66,0,3-1.34,3-3s-1.34-3-3-3H4c-1.66,0-3,1.34-3,3v22 c0,1.66,1.34,3,3,3s3-1.34,3-3v-14.19c8.2,7.93,21.2,16.19,37.41,19.52c0.2,0.04,0.41,0.06,0.61,0.06c1.39,0,2.64-0.98,2.94-2.4 C48.29,123.38,47.25,121.79,45.62,121.46z" /><g><path fill="#fff" d="M39,52c-1.66,0-3-1.34-3-3V29c0-1.66,1.34-3,3-3s3,1.34,3,3v20C42,50.66,40.66,52,39,52z" /></g></svg>


                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Crypto Exchange</h3> <Link
                              href="/cryptocurrency-exchange"
                              className="leading-4  font-semibold text-sky-700 hover:text-black pl-2 gap-2 flex "
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                        <div className="my-6 flex items-start font-semibold text-sky-700">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="28px" height="28px"><path fill="#fff" d="M59,5.69L16,30.51c-3.09,1.79-5,5.09-5,8.66v49.65c0,3.57,1.91,6.87,5,8.66l43,24.83 c3.09,1.79,6.91,1.79,10,0l43-24.83c3.09-1.79,5-5.09,5-8.66V39.17c0-3.57-1.91-6.87-5-8.66L69,5.69C65.91,3.9,62.09,3.9,59,5.69z" /><path fill="#90caf9" d="M113.5,27.92L102,21.28c-1.44-0.83-3.27-0.34-4.1,1.1c-0.83,1.44-0.34,3.27,1.1,4.1l11.5,6.64 c0.17,0.1,0.32,0.21,0.48,0.32L99,40.35c-1.43,0.83-1.93,2.66-1.1,4.1c0.56,0.96,1.56,1.5,2.6,1.5c0.51,0,1.02-0.13,1.5-0.4 l11.96-6.91c0.01,0.18,0.04,0.35,0.04,0.53v49.65c0,2.49-1.34,4.82-3.5,6.06l-43,24.83c-0.16,0.09-0.33,0.17-0.5,0.25V104.6 c0-1.66-1.34-3-3-3s-3,1.34-3,3v15.36c-0.17-0.08-0.34-0.15-0.5-0.25L49,113.07c-1.43-0.83-3.27-0.34-4.1,1.1 c-0.83,1.44-0.34,3.27,1.1,4.1l11.5,6.64c2,1.16,4.25,1.74,6.5,1.74s4.5-0.58,6.5-1.74l43-24.83c4.01-2.31,6.5-6.63,6.5-11.26 V39.17C120,34.54,117.51,30.23,113.5,27.92z" /><path fill="#18193f" d="M92,46.1L70,33.4l21.75-12.56c0.51-0.3,0.91-0.72,1.16-1.21c0.02-0.03,0.04-0.07,0.06-0.1 c0.83-1.44,0.34-3.27-1.1-4.1L70.5,3.09c-4.01-2.31-8.99-2.31-13,0l-43,24.83C10.49,30.23,8,34.54,8,39.17v49.65 c0,4.63,2.49,8.94,6.5,11.26l21.26,12.27l0.26,0.15c0.46,0.26,0.97,0.39,1.48,0.39c0.52,0,1.04-0.14,1.51-0.41 c0.92-0.54,1.49-1.52,1.49-2.59V84.5l22,12.7c0.93,0.54,2.07,0.54,3,0L92,81.9c0.93-0.54,1.5-1.53,1.5-2.6V48.7 C93.5,47.63,92.93,46.64,92,46.1z M60.5,8.29c1.08-0.62,2.29-0.94,3.5-0.94s2.42,0.31,3.5,0.94l17,9.81l-22,12.7 c-0.93,0.54-1.5,1.53-1.5,2.6s0.57,2.06,1.5,2.6l22,12.7L64,60.56L17.02,33.43c0.16-0.11,0.31-0.23,0.48-0.32L60.5,8.29z M39,76.7 c-0.93-0.54-2.07-0.54-3,0s-1.5,1.53-1.5,2.6v25.4l-17-9.81c-2.16-1.25-3.5-3.57-3.5-6.06V39.17c0-0.18,0.02-0.36,0.04-0.53 L61,65.75V89.4L39,76.7z M67,89.4V65.75L87.5,53.9v23.67L67,89.4z" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Token Development</h3>
                            <Link
                              href="/token-development"
                              className="leading-4  font-semibold text-sky-700 hover:text-black  pl-2"
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Web App Section */}
              <div className="pt-4 pl-4 text-gray-900 md:pb-4 ">
                <div
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button">
                  <div className="flex-wrap flex flex-col gap-2 items-center">
                    <div className="relative px-2 flex-wrap flex-col flex">
                      <div className="px-2 font-bold leading-6 text-sky-700 py-4">
                        Web App
                      </div>
                      <div className="ml-6">

                        <div className="flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Custom Web App
</h3>
                            <div className="flex flex-wrap xl:flex-nowrap text-gray-700  ">
                              <Link
                                href="/nft-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium  flex items-start"
                                onClick={servicesHandler}>
                                Development,
                              </Link>
                              <Link
                                href="/nft-marketplace-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium pl-0 xl:pl-2 flex items-start"
                                onClick={servicesHandler}>
                                Marketplace
                              </Link>
                            </div>
                          </div>
                        </div>


                        <div className="my-6 flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Responsive Web App
</h3>
                            {/* <Link
                          href="/defi"
                          className="leading-4 font-semibold text-sky-700  hover:text-black flex items-center"
                          onClick={servicesHandler}>
                          DeFI
                        </Link> */}
                          </div>
                        </div>

                        <div className="flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>


                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Fullstack development
</h3> <Link
                              href="/cryptocurrency-exchange"
                              className="leading-4  font-semibold text-sky-700 hover:text-black pl-2 gap-2 flex "
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                        <div className="my-6 flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Web Design</h3>
                            <Link
                              href="/token-development"
                              className="leading-4  font-semibold text-sky-700 hover:text-black  pl-2"
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>

               
 {/* WordPress Section */}
 <div className="pt-4 pl-4 text-gray-900 md:pb-4 ">
                <div
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button">
                  <div className="flex-wrap flex flex-col gap-2 items-center">
                    <div className="relative px-2 flex-wrap flex-col flex">
                      <div className="px-2 font-bold leading-6 text-sky-700 py-4">
                      Word Press
                      </div>
                      <div className="ml-6">

                        <div className="flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Custom Wordpress Development

</h3>
                            <div className="flex flex-wrap xl:flex-nowrap text-gray-700  ">
                              <Link
                                href="/nft-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium  flex items-start"
                                onClick={servicesHandler}>
                                Development,
                              </Link>
                              <Link
                                href="/nft-marketplace-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium pl-0 xl:pl-2 flex items-start"
                                onClick={servicesHandler}>
                                Marketplace
                              </Link>
                            </div>
                          </div>
                        </div>


                        <div className="my-6 flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Responsive Wordpress Design

</h3>
                            {/* <Link
                          href="/defi"
                          className="leading-4 font-semibold text-sky-700  hover:text-black flex items-center"
                          onClick={servicesHandler}>
                          DeFI
                        </Link> */}
                          </div>
                        </div>

                        <div className="flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>


                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>E-commerce Solution with Woocommerce

</h3> <Link
                              href="/cryptocurrency-exchange"
                              className="leading-4  font-semibold text-sky-700 hover:text-black pl-2 gap-2 flex "
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                        <div className="my-6 flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px"><path fill="#8ce7f2" d="M46.8,37.3H43V16.2c0-1-0.8-1.9-1.9-1.9H12.4c-1,0-1.9,0.8-1.9,1.9v21.1H6.7c-0.5,0-0.9,0.4-0.9,0.9v0.1 c0,2.6,2.1,4.7,4.7,4.7H43c2.6,0,4.7-2.1,4.7-4.7v-0.1C47.7,37.7,47.3,37.3,46.8,37.3z" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M18.7,8.5h20.8c1.1,0,2,0.9,2,2v21c0,1.1-0.9,2-2,2h-31c-1.1,0-2-0.9-2-2v-21c0-1.1,0.9-2,2-2h4" /><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M32,39.5H6.5c-2.8,0-5-2.2-5-5v0c0-0.6,0.4-1,1-1h43c0.6,0,1,0.4,1,1v0c0,2.8-2.2,5-5,5H38" /><line x1="25.5" x2="22.5" y1="14.5" y2="27.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-width="3" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="30.5,24.5 33.5,21 30.5,17.5" /><polyline fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" points="17.5,24.5 14.5,21 17.5,17.5" /></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Wordpress Support and Mantenance</h3>
                            <Link
                              href="/token-development"
                              className="leading-4  font-semibold text-sky-700 hover:text-black  pl-2"
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>



                {/* AI Section */}
                <div className="pt-4 pl-4 text-gray-900 md:pb-4 ">
                <div
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button">
                  <div className="flex-wrap flex flex-col gap-2 items-center">
                    <div className="relative px-2 flex-wrap flex-col flex">
                      <div className="px-2 font-bold leading-6 text-sky-700 py-4">
                     AI
                      </div>
                      <div className="ml-6">

                        <div className="flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="25px" height="25px"><path fill="#fff" d="M64.1,4c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.4,0c21.8,0,40.4,13.9,47.3,33.4c1.8,5.2,7.7,37.1,7.7,37.1c0.7,2.1,0.1,4.4-1.4,6l-2.8,2.8c-1.1,1.1-1.7,2.6-1.7,4.2V102c0,4.4-3.6,8-8,8h-8c-5.5,0-10,4.5-10,10v7H77H64L64.1,4C64,4,64,4,64.1,4z" /><path fill="#444b54" d="M87.9 127c-1.7 0-3-1.3-3-3v-4c0-7.2 5.8-13 13-13h8c2.8 0 5-2.2 5-5V87.5c0-2.4.9-4.6 2.5-6.3l2.8-2.8c.8-.8 1-1.9.7-3 0-.1-.1-.2-.1-.3l-6.4-30.7c-2.9-14.1-11.7-25.8-24-32.2C80.4 9.1 73.8 7.4 67 7v102c0 1.7-1.3 3-3 3s-3-1.3-3-3V4c0-.9.4-1.7 1.1-2.3C62.7 1.2 63.4 1 64.2 1c8.7-.1 17.4 1.9 25 5.9 13.9 7.2 23.8 20.4 27.1 36.3l6.4 30.6c.9 3.1.1 6.5-2.2 8.8l-2.8 2.8c-.5.6-.8 1.3-.8 2.1V102c0 6.1-4.9 11-11 11h-8c-3.9 0-7 3.1-7 7v4C90.9 125.7 89.5 127 87.9 127zM64 4L64 4 64 4zM64 127c-.2 0-.4 0-.6-.1-.2 0-.4-.1-.6-.2-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.4-.6-.6-.9-1.3-.9-2.1 0-.2 0-.4.1-.6 0-.2.1-.4.2-.6.1-.2.2-.3.3-.5.1-.2.2-.3.4-.4s.3-.3.5-.4c.2-.1.3-.2.5-.3.2-.1.4-.1.6-.2.4-.1.8-.1 1.2 0 .2 0 .4.1.6.2.2.1.4.2.5.3.2.1.3.2.5.4.1.1.3.3.4.4.1.2.2.3.3.5.1.2.1.4.2.6 0 .2.1.4.1.6 0 .8-.3 1.6-.9 2.1-.1.1-.3.3-.5.4-.2.1-.3.2-.5.3-.2.1-.4.1-.6.2C64.4 127 64.2 127 64 127z" /><path fill="#fff" d="M47 12A7 7 0 1 0 47 26 7 7 0 1 0 47 12zM47 102A7 7 0 1 0 47 116 7 7 0 1 0 47 102zM12 57A7 7 0 1 0 12 71 7 7 0 1 0 12 57zM21 26A7 7 0 1 0 21 40 7 7 0 1 0 21 26zM21 88A7 7 0 1 0 21 102 7 7 0 1 0 21 88z" /><path fill="#71c2ff" d="M47 29c-5.5 0-10-4.5-10-10S41.5 9 47 9s10 4.5 10 10S52.5 29 47 29zM47 15c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4S49.2 15 47 15zM52 76H37c-.8 0-1.6.3-2.1.9l-9.3 9.3c-1.4-.7-3-1.1-4.6-1.1-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-1.7-.4-3.2-1.1-4.6l8.4-8.4H52c1.7 0 3-1.3 3-3S53.7 76 52 76zM21 99c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S23.2 99 21 99zM52 61H21.5c-1.3-4.1-5.1-7-9.5-7C6.5 54 2 58.5 2 64s4.5 10 10 10c4.5 0 8.3-2.9 9.5-7H52c1.7 0 3-1.3 3-3S53.7 61 52 61zM12 68c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S14.2 68 12 68zM21 43c1.7 0 3.2-.4 4.6-1.1l9.3 9.3c.6.6 1.3.9 2.1.9h15c1.7 0 3-1.3 3-3s-1.3-3-3-3H38.2l-8.4-8.4c.7-1.4 1.1-3 1.1-4.6 0-5.5-4.5-10-10-10s-10 4.5-10 10S15.5 43 21 43zM21 29c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S18.8 29 21 29z" /><g><path fill="#71c2ff" d="M47,119c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S52.5,119,47,119z M47,105c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S49.2,105,47,105z" /></g></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Custom AI Solution


</h3>
                            <div className="flex flex-wrap xl:flex-nowrap text-gray-700  ">
                              <Link
                                href="/nft-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium  flex items-start"
                                onClick={servicesHandler}>
                                Development,
                              </Link>
                              <Link
                                href="/nft-marketplace-development"
                                className="leading-4 hover:text-gray-500 text-[12px] font-medium pl-0 xl:pl-2 flex items-start"
                                onClick={servicesHandler}>
                                Marketplace
                              </Link>
                            </div>
                          </div>
                        </div>


                        <div className="my-6 flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="25px" height="25px"><path fill="#fff" d="M64.1,4c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.4,0c21.8,0,40.4,13.9,47.3,33.4c1.8,5.2,7.7,37.1,7.7,37.1c0.7,2.1,0.1,4.4-1.4,6l-2.8,2.8c-1.1,1.1-1.7,2.6-1.7,4.2V102c0,4.4-3.6,8-8,8h-8c-5.5,0-10,4.5-10,10v7H77H64L64.1,4C64,4,64,4,64.1,4z" /><path fill="#444b54" d="M87.9 127c-1.7 0-3-1.3-3-3v-4c0-7.2 5.8-13 13-13h8c2.8 0 5-2.2 5-5V87.5c0-2.4.9-4.6 2.5-6.3l2.8-2.8c.8-.8 1-1.9.7-3 0-.1-.1-.2-.1-.3l-6.4-30.7c-2.9-14.1-11.7-25.8-24-32.2C80.4 9.1 73.8 7.4 67 7v102c0 1.7-1.3 3-3 3s-3-1.3-3-3V4c0-.9.4-1.7 1.1-2.3C62.7 1.2 63.4 1 64.2 1c8.7-.1 17.4 1.9 25 5.9 13.9 7.2 23.8 20.4 27.1 36.3l6.4 30.6c.9 3.1.1 6.5-2.2 8.8l-2.8 2.8c-.5.6-.8 1.3-.8 2.1V102c0 6.1-4.9 11-11 11h-8c-3.9 0-7 3.1-7 7v4C90.9 125.7 89.5 127 87.9 127zM64 4L64 4 64 4zM64 127c-.2 0-.4 0-.6-.1-.2 0-.4-.1-.6-.2-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.4-.6-.6-.9-1.3-.9-2.1 0-.2 0-.4.1-.6 0-.2.1-.4.2-.6.1-.2.2-.3.3-.5.1-.2.2-.3.4-.4s.3-.3.5-.4c.2-.1.3-.2.5-.3.2-.1.4-.1.6-.2.4-.1.8-.1 1.2 0 .2 0 .4.1.6.2.2.1.4.2.5.3.2.1.3.2.5.4.1.1.3.3.4.4.1.2.2.3.3.5.1.2.1.4.2.6 0 .2.1.4.1.6 0 .8-.3 1.6-.9 2.1-.1.1-.3.3-.5.4-.2.1-.3.2-.5.3-.2.1-.4.1-.6.2C64.4 127 64.2 127 64 127z" /><path fill="#fff" d="M47 12A7 7 0 1 0 47 26 7 7 0 1 0 47 12zM47 102A7 7 0 1 0 47 116 7 7 0 1 0 47 102zM12 57A7 7 0 1 0 12 71 7 7 0 1 0 12 57zM21 26A7 7 0 1 0 21 40 7 7 0 1 0 21 26zM21 88A7 7 0 1 0 21 102 7 7 0 1 0 21 88z" /><path fill="#71c2ff" d="M47 29c-5.5 0-10-4.5-10-10S41.5 9 47 9s10 4.5 10 10S52.5 29 47 29zM47 15c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4S49.2 15 47 15zM52 76H37c-.8 0-1.6.3-2.1.9l-9.3 9.3c-1.4-.7-3-1.1-4.6-1.1-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-1.7-.4-3.2-1.1-4.6l8.4-8.4H52c1.7 0 3-1.3 3-3S53.7 76 52 76zM21 99c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S23.2 99 21 99zM52 61H21.5c-1.3-4.1-5.1-7-9.5-7C6.5 54 2 58.5 2 64s4.5 10 10 10c4.5 0 8.3-2.9 9.5-7H52c1.7 0 3-1.3 3-3S53.7 61 52 61zM12 68c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S14.2 68 12 68zM21 43c1.7 0 3.2-.4 4.6-1.1l9.3 9.3c.6.6 1.3.9 2.1.9h15c1.7 0 3-1.3 3-3s-1.3-3-3-3H38.2l-8.4-8.4c.7-1.4 1.1-3 1.1-4.6 0-5.5-4.5-10-10-10s-10 4.5-10 10S15.5 43 21 43zM21 29c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S18.8 29 21 29z" /><g><path fill="#71c2ff" d="M47,119c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S52.5,119,47,119z M47,105c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S49.2,105,47,105z" /></g></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Machine Learning


</h3>
                            {/* <Link
                          href="/defi"
                          className="leading-4 font-semibold text-sky-700  hover:text-black flex items-center"
                          onClick={servicesHandler}>
                          DeFI
                        </Link> */}
                          </div>
                        </div>

                        <div className="flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="25px" height="25px"><path fill="#fff" d="M64.1,4c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.4,0c21.8,0,40.4,13.9,47.3,33.4c1.8,5.2,7.7,37.1,7.7,37.1c0.7,2.1,0.1,4.4-1.4,6l-2.8,2.8c-1.1,1.1-1.7,2.6-1.7,4.2V102c0,4.4-3.6,8-8,8h-8c-5.5,0-10,4.5-10,10v7H77H64L64.1,4C64,4,64,4,64.1,4z" /><path fill="#444b54" d="M87.9 127c-1.7 0-3-1.3-3-3v-4c0-7.2 5.8-13 13-13h8c2.8 0 5-2.2 5-5V87.5c0-2.4.9-4.6 2.5-6.3l2.8-2.8c.8-.8 1-1.9.7-3 0-.1-.1-.2-.1-.3l-6.4-30.7c-2.9-14.1-11.7-25.8-24-32.2C80.4 9.1 73.8 7.4 67 7v102c0 1.7-1.3 3-3 3s-3-1.3-3-3V4c0-.9.4-1.7 1.1-2.3C62.7 1.2 63.4 1 64.2 1c8.7-.1 17.4 1.9 25 5.9 13.9 7.2 23.8 20.4 27.1 36.3l6.4 30.6c.9 3.1.1 6.5-2.2 8.8l-2.8 2.8c-.5.6-.8 1.3-.8 2.1V102c0 6.1-4.9 11-11 11h-8c-3.9 0-7 3.1-7 7v4C90.9 125.7 89.5 127 87.9 127zM64 4L64 4 64 4zM64 127c-.2 0-.4 0-.6-.1-.2 0-.4-.1-.6-.2-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.4-.6-.6-.9-1.3-.9-2.1 0-.2 0-.4.1-.6 0-.2.1-.4.2-.6.1-.2.2-.3.3-.5.1-.2.2-.3.4-.4s.3-.3.5-.4c.2-.1.3-.2.5-.3.2-.1.4-.1.6-.2.4-.1.8-.1 1.2 0 .2 0 .4.1.6.2.2.1.4.2.5.3.2.1.3.2.5.4.1.1.3.3.4.4.1.2.2.3.3.5.1.2.1.4.2.6 0 .2.1.4.1.6 0 .8-.3 1.6-.9 2.1-.1.1-.3.3-.5.4-.2.1-.3.2-.5.3-.2.1-.4.1-.6.2C64.4 127 64.2 127 64 127z" /><path fill="#fff" d="M47 12A7 7 0 1 0 47 26 7 7 0 1 0 47 12zM47 102A7 7 0 1 0 47 116 7 7 0 1 0 47 102zM12 57A7 7 0 1 0 12 71 7 7 0 1 0 12 57zM21 26A7 7 0 1 0 21 40 7 7 0 1 0 21 26zM21 88A7 7 0 1 0 21 102 7 7 0 1 0 21 88z" /><path fill="#71c2ff" d="M47 29c-5.5 0-10-4.5-10-10S41.5 9 47 9s10 4.5 10 10S52.5 29 47 29zM47 15c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4S49.2 15 47 15zM52 76H37c-.8 0-1.6.3-2.1.9l-9.3 9.3c-1.4-.7-3-1.1-4.6-1.1-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-1.7-.4-3.2-1.1-4.6l8.4-8.4H52c1.7 0 3-1.3 3-3S53.7 76 52 76zM21 99c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S23.2 99 21 99zM52 61H21.5c-1.3-4.1-5.1-7-9.5-7C6.5 54 2 58.5 2 64s4.5 10 10 10c4.5 0 8.3-2.9 9.5-7H52c1.7 0 3-1.3 3-3S53.7 61 52 61zM12 68c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S14.2 68 12 68zM21 43c1.7 0 3.2-.4 4.6-1.1l9.3 9.3c.6.6 1.3.9 2.1.9h15c1.7 0 3-1.3 3-3s-1.3-3-3-3H38.2l-8.4-8.4c.7-1.4 1.1-3 1.1-4.6 0-5.5-4.5-10-10-10s-10 4.5-10 10S15.5 43 21 43zM21 29c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S18.8 29 21 29z" /><g><path fill="#71c2ff" d="M47,119c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S52.5,119,47,119z M47,105c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S49.2,105,47,105z" /></g></svg>


                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Natural Language Processing
</h3> <Link
                              href="/cryptocurrency-exchange"
                              className="leading-4  font-semibold text-sky-700 hover:text-black pl-2 gap-2 flex "
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                        <div className="my-6 flex items-start font-semibold text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="25px" height="25px"><path fill="#fff" d="M64.1,4c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.4,0c21.8,0,40.4,13.9,47.3,33.4c1.8,5.2,7.7,37.1,7.7,37.1c0.7,2.1,0.1,4.4-1.4,6l-2.8,2.8c-1.1,1.1-1.7,2.6-1.7,4.2V102c0,4.4-3.6,8-8,8h-8c-5.5,0-10,4.5-10,10v7H77H64L64.1,4C64,4,64,4,64.1,4z" /><path fill="#444b54" d="M87.9 127c-1.7 0-3-1.3-3-3v-4c0-7.2 5.8-13 13-13h8c2.8 0 5-2.2 5-5V87.5c0-2.4.9-4.6 2.5-6.3l2.8-2.8c.8-.8 1-1.9.7-3 0-.1-.1-.2-.1-.3l-6.4-30.7c-2.9-14.1-11.7-25.8-24-32.2C80.4 9.1 73.8 7.4 67 7v102c0 1.7-1.3 3-3 3s-3-1.3-3-3V4c0-.9.4-1.7 1.1-2.3C62.7 1.2 63.4 1 64.2 1c8.7-.1 17.4 1.9 25 5.9 13.9 7.2 23.8 20.4 27.1 36.3l6.4 30.6c.9 3.1.1 6.5-2.2 8.8l-2.8 2.8c-.5.6-.8 1.3-.8 2.1V102c0 6.1-4.9 11-11 11h-8c-3.9 0-7 3.1-7 7v4C90.9 125.7 89.5 127 87.9 127zM64 4L64 4 64 4zM64 127c-.2 0-.4 0-.6-.1-.2 0-.4-.1-.6-.2-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.4-.6-.6-.9-1.3-.9-2.1 0-.2 0-.4.1-.6 0-.2.1-.4.2-.6.1-.2.2-.3.3-.5.1-.2.2-.3.4-.4s.3-.3.5-.4c.2-.1.3-.2.5-.3.2-.1.4-.1.6-.2.4-.1.8-.1 1.2 0 .2 0 .4.1.6.2.2.1.4.2.5.3.2.1.3.2.5.4.1.1.3.3.4.4.1.2.2.3.3.5.1.2.1.4.2.6 0 .2.1.4.1.6 0 .8-.3 1.6-.9 2.1-.1.1-.3.3-.5.4-.2.1-.3.2-.5.3-.2.1-.4.1-.6.2C64.4 127 64.2 127 64 127z" /><path fill="#fff" d="M47 12A7 7 0 1 0 47 26 7 7 0 1 0 47 12zM47 102A7 7 0 1 0 47 116 7 7 0 1 0 47 102zM12 57A7 7 0 1 0 12 71 7 7 0 1 0 12 57zM21 26A7 7 0 1 0 21 40 7 7 0 1 0 21 26zM21 88A7 7 0 1 0 21 102 7 7 0 1 0 21 88z" /><path fill="#71c2ff" d="M47 29c-5.5 0-10-4.5-10-10S41.5 9 47 9s10 4.5 10 10S52.5 29 47 29zM47 15c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4S49.2 15 47 15zM52 76H37c-.8 0-1.6.3-2.1.9l-9.3 9.3c-1.4-.7-3-1.1-4.6-1.1-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-1.7-.4-3.2-1.1-4.6l8.4-8.4H52c1.7 0 3-1.3 3-3S53.7 76 52 76zM21 99c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S23.2 99 21 99zM52 61H21.5c-1.3-4.1-5.1-7-9.5-7C6.5 54 2 58.5 2 64s4.5 10 10 10c4.5 0 8.3-2.9 9.5-7H52c1.7 0 3-1.3 3-3S53.7 61 52 61zM12 68c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4S14.2 68 12 68zM21 43c1.7 0 3.2-.4 4.6-1.1l9.3 9.3c.6.6 1.3.9 2.1.9h15c1.7 0 3-1.3 3-3s-1.3-3-3-3H38.2l-8.4-8.4c.7-1.4 1.1-3 1.1-4.6 0-5.5-4.5-10-10-10s-10 4.5-10 10S15.5 43 21 43zM21 29c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4S18.8 29 21 29z" /><g><path fill="#71c2ff" d="M47,119c-5.5,0-10-4.5-10-10s4.5-10,10-10s10,4.5,10,10S52.5,119,47,119z M47,105c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S49.2,105,47,105z" /></g></svg>
                          <div className="ml-1 flex flex-wrap xl:flex-nowrap flex-col">
                            <h3>Computer Vision Services</h3>
                            <Link
                              href="/token-development"
                              className="leading-4  font-semibold text-sky-700 hover:text-black  pl-2"
                              onClick={servicesHandler}>

                            </Link>
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
             
            </div>
          )}



          {/* <li>
                    <a
                      href="#"
                      className="text-gray-500  hover:text-blue-600 
                      "
                    >
                      Newsletter
                    </a>
                  </li> */}
          {/* <li>
                    <a
                      href="#"
                      className="text-gray-500  hover:text-blue-600 
                      "
                    >
                      Playground
                    </a>
                  </li> */}
          {/* <li>
                    <a
                      href="#"
                      className="text-gray-500  hover:text-blue-600 
                      "
                    >
                      License
                    </a>
                  </li> */}
          {/* <li>
                    <a
                      href="#"
                      className="text-gray-500  hover:text-blue-600 
                      "
                    >
                      Support Center
                    </a>
                  </li> */}
          {/* <li>
                    <a
                      href="#"
                      className="text-gray-500  hover:text-blue-600 
                      "
                    >
                      Terms
                    </a>
                  </li> */}
          {/* <li>
                    <a
                      href="#"
                      className="text-gray-500  hover:text-blue-600 
                      "
                    >
                      Support Center
                    </a>
                  </li> */}
          {/* <li>
                    <a
                      href="#"
                      className="text-gray-500  hover:text-blue-600 
                      "
                    >
                      Terms
                    </a>
                  </li> */}

          {/*  */}
          <Link
            href="/portfolio"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px] focus:text-black focus:border-none"
          >
            Portfolio
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px] focus:text-black focus:border-none"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px] focus:text-black focus:border-none"
          >
            Careers
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px] focus:text-black focus:border-none"
          >
            Contact Us
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Services</span>
              <Image className="h-8 w-auto" src={logo} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-[120px] items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <TiArrowSortedDown
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 font-black text-blue-500 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="ml-5">
                        


                        <Disclosure as="div" className="-ml-2">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-[120px] items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Blockchain
                                <TiArrowSortedDown
                                  className={classNames(
                                    open ? "rotate-180" : "",
                                    "h-5 w-5 font-black text-blue-500 flex-none"
                                  )}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="ml-5">
                               



                                <Disclosure as="div" className="-ml-1">
                                  {({ open }) => (
                                    <>
                                      <Disclosure.Button className="flex w-[80px] items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        NFT
                                        <TiArrowSortedDown
                                          className={classNames(
                                            open ? "rotate-180" : "",
                                            "h-5 w-5 font-black text-blue-500 flex-none"
                                          )}
                                          aria-hidden="true"
                                        />
                                      </Disclosure.Button>
                                      <Disclosure.Panel className="ml-5">
                                        {[...nftList].map((item) => (
                                          <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() =>
                                              setMobileMenuOpen(false)
                                            }
                                            className="block rounded-lg py-2 pl-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                          >
                                            {item.name}
                                          </Link>
                                        ))}
                                      </Disclosure.Panel>
                                    </>
                                  )}
                                </Disclosure>
                                {[...blockChaninList].map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block rounded-lg py-2 pl-2 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                        {[...servicesList].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg py-2 p-1 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}

                {/*  */}


                {/* <DropDown /> */}

                <button
                  onClick={servicesHandler}
                  id="mega-menu-dropdown-button"
                  data-dropdown-toggle="mega-menu-dropdown"
                  className="flex items-center -ml-3 justify-between w-full py-2 px-3 font-bold text-gray-900  md:w-auto   md:border-0     "
                >
                  Services{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {checkClick && (
                  <div
                    id="mega-menu-dropdown"
                    className=" grid -ml-4 w-auto grid-cols-2 text-sm bg-white  rounded-lg   md:grid-cols-3    "
                  >
                    <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                      <ul
                        className="space-y-4"
                        aria-labelledby="mega-menu-dropdown-button"
                      >
                        <li>
                          <Link
                            href="/defi"
                            className="text-gray-500  underline  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Blockchain
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/nft-development"
                            className="text-gray-500  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            NFT
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/defi"
                            className="text-gray-500  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            DeFI
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/cryptocurrency-exchange"
                            className="text-gray-500  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Cryptocurrency Exchange
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/nft-development"
                            className="text-gray-500  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            NFT Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/nft-marketplace-development"
                            className="text-gray-500  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            NFT Marketplace Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/token-development"
                            className="text-gray-500  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Token Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/web-application"
                            className="text-gray-500  underline  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Web Application
                          </Link>
                        </li>
                        {/* <li>
                  <a
                    href="#"
                    className="text-gray-500  hover:text-blue-600 
                    "
                  >
                    Newsletter
                  </a>
                </li> */}
                        {/* <li>
                  <a
                    href="#"
                    className="text-gray-500  hover:text-blue-600 
                    "
                  >
                    Playground
                  </a>
                </li> */}
                        {/* <li>
                  <a
                    href="#"
                    className="text-gray-500  hover:text-blue-600 
                    "
                  >
                    License
                  </a>
                </li> */}
                      </ul>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/e-commerce-solution"
                            className="text-gray-500  underline hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            e-commerce
                          </Link>
                        </li>
                        {/* <li>
                  <a
                    href="#"
                    className="text-gray-500  hover:text-blue-600 
                    "
                  >
                    Support Center
                  </a>
                </li> */}
                        {/* <li>
                  <a
                    href="#"
                    className="text-gray-500  hover:text-blue-600 
                    "
                  >
                    Terms
                  </a>
                </li> */}
                      </ul>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/artificial-intelligence"
                            className="text-gray-500  underline  hover:text-blue-600 
                    "
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Artificial Intelligence
                          </Link>
                        </li>
                        {/* <li>
                  <a
                    href="#"
                    className="text-gray-500  hover:text-blue-600 
                    "
                  >
                    Support Center
                  </a>
                </li> */}
                        {/* <li>
                  <a
                    href="#"
                    className="text-gray-500  hover:text-blue-600 
                    "
                  >
                    Terms
                  </a>
                </li> */}
                      </ul>
                    </div>
                  </div>
                )}


                {/*  */}
                <Link
                  href="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/careers"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
