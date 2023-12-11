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
import Image from "next/image";
import DropDown from "./home/dropDown";
import Link from "next/link";
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
    <header className="bg-white sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 gap-3 items-center ">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
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
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]"
          >
            Home
          </Link>
          {/* <DropDown /> */}

          <button
            onClick={servicesHandler}
            id="mega-menu-dropdown-button"
            data-dropdown-toggle="mega-menu-dropdown"
            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 border-b border-gray-100 md:w-auto text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]  md:border-0  md:p-0      "
          >
            Company{" "}
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
                  <li>
                    <Link
                      href="/defi"
                      className="text-gray-500  underline hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      Blockchain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nft-development"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      NFT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/defi"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      DeFI
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cryptocurrency-exchange"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      Cryptocurrency Exchange
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nft-development"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      NFT Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nft-marketplace-development"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
                    >
                      NFT Marketplace Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/token-development"
                      className="text-gray-500  hover:text-blue-600 
                      "
                      onClick={servicesHandler}
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
                      onClick={servicesHandler}
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
                      onClick={servicesHandler}
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
                      onClick={servicesHandler} 
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
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]"
          >
            Portfolio
          </Link>
          <Link
            href="/about-us"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]"
          >
            Careers
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]"
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
              <span className="sr-only">Your Company</span>
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
            Company{" "}
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
                    className="text-gray-500  underline hover:text-blue-600 
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
