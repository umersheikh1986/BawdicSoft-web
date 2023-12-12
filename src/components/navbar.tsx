"use client";
import React, { FC, Fragment, useState } from "react";
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
image:StaticImageData
}
const dataList:data[] = [{image:blockChainLogo},{image:webapplicatiniconLogo},{image:ecommerceiconLogo},{image:aiIconLogo}]
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

interface NavbarProps {}

function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [checkClick, setCheckClick] = useState<boolean>(false);



  const servicesHandler = () => {
    if(checkClick){
      return setCheckClick(false);
    }
    else{
      return setCheckClick(true);
    }
  }


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
            className="flex items-center justify-between w-full py-2 px-3 border-b border-gray-100 md:w-auto text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]  md:border-0  md:p-0  focus:text-black focus:border-none    "
          >
            Services{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
            
          </button>
          {checkClick && (
            <div
              id="mega-menu-dropdown"
              className="absolute z-10 grid  w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md  md:grid-cols-3 lg:grid-cols-4  mt-10 pb-10 left-1/2 transform -translate-x-1/2  "
            >
              <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                <ul
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button"
                >
                  <li className="   xl:flex-nowrap flex-wrap flex flex-col gap-2 items-center">
                    <ul className="relative   px-2 xl:flex-nowrap flex-wrap flex-col    flex ">
                    <li className=" px-2 xl:flex-nowrap flex-wrap  py-4 gap-2  flex justify-start  items-center"><svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 576 512"><path d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z"/></svg>
                    <li
                      className="font-bold leading-6 text-sky-700 hover:text-black   ">
                      Blockchain
                    </li>
                    </li>
                    <div className="lg:pl-5 xl:pl-8 -mt-3 flex flex-col gap-5">
                 <li className="list-disc"><span
                    
                      className="font-bold text-gray-500   
                      "
                      >
                      NFT
                    </span>
                    <ul className=" list-none flex flex-col gap-2 pt-2">
                    <Link
                      href="/nft-development"
                      className=" leading-4  hover:text-sky-800 text-xs font-semibold  flex items-center
                      "
                      onClick={servicesHandler}
                    >
    <span className="mr-2 w-2 h-2 border border-solid border-gray-500 rounded-full"></span>

                      NFT Development
                    </Link>
                
                
                    <Link
                      href="/nft-marketplace-development"
                      className="leading-4  hover:text-sky-800 text-xs font-semibold  flex items-center
                      "
                      onClick={servicesHandler}
                    >
    <span className="mr-2 w-2 h-2 border border-solid border-gray-500 rounded-full"></span>

                      NFT Marketplace Development
                    </Link>
              
                      </ul>
                      </li>

                    <li className="list-disc"> <Link
                      href="/defi"
                      className="leading-4  hover:text-sky-800  font-semibold  flex items-center
                      "
                      onClick={servicesHandler}
                      >
                      DeFI
                    </Link></li>
                    <li className="list-disc">
                    <Link
                      href="/cryptocurrency-exchange"
                      className="leading-4  hover:text-sky-800  font-semibold  flex items-center
                      "
                      onClick={servicesHandler}
                    >
                      Cryptocurrency Exchange
                    </Link>
                  </li>
                  <li className="list-disc">
                    <Link
                      href="/token-development"
                      className="leading-4  hover:text-sky-800  font-semibold  flex items-center
                      "
                      onClick={servicesHandler}
                    >
                      Token Development
                    </Link>
                  </li>
                      </div>
                      </ul>

                  </li>
                  {/* <li>
                    <Link
                      href="/nft-development"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      NFT
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      href="/defi"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      DeFI
                    </Link>
                  </li> */}
               
               
               
                </ul>
              </div>
              <div className="p-4 pb-0 text-gray-900 md:pb-4 ">
                <ul className="space-y-4">
                  <li className="  px-2 py-4 xl:flex-nowrap flex-wrap rounded-md  flex  gap-2  items-start">
                  {/* <Image src={dataList[1].image.src} alt="logo" width={400} height={400} className="w-10 h-10"></Image> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>

                    <Link
                      href="/web-application"
                      className="font-bold leading-6 text-sky-700 hover:text-black    
                      "
                      onClick={servicesHandler}
                    >
                      Web Application
                    </Link>
                  </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-4">
                      <li className="  xl:flex-nowrap flex-wrap px-2 py-4 rounded-md flex gap-2   items-start">
                  {/* <Image src={dataList[2].image.src} alt="logo" width={400} height={400} className="w-10 h-10"></Image> */}
                  <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                        <Link
                          href="/e-commerce-solution"
                          className="font-bold leading-6 text-sky-700 hover:text-black  
                          "
                          onClick={servicesHandler}
                        >
                          e-commerce
                        </Link>
                      </li>
                      </ul>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-4">
                        <li className=" px-2 py-4 rounded-md   xl:flex-nowrap flex-wrap flex gap-2   items-start">
                  {/* <Image src={dataList[3].image.src} alt="logo" width={400} height={400} className="w-10 h-10"></Image> */}
                  <svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 512 512"><path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM224 64c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C145.5 152.1 129 192 96 192c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C168.1 286.5 208 303 208 336c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C302.5 263.9 319 224 352 224c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C279.9 129.5 240 113 240 80c0-8.8-7.2-16-16-16zm-24 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" /></svg>
                          <Link
                            href="/artificial-intelligence"
                            className="font-bold leading-6 text-sky-700 hover:text-black  
                            "
                            onClick={servicesHandler} 
                          >
                            AI
                          </Link>
                        </li>
                        </ul>
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
            className="flex items-center -ml-3 justify-between w-full py-2 px-3 font-bold text-gray-900  md:w-auto   md:border-0  md:p-0   "
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
