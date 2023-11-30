"use client"
import React, { FC, Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import logo from "../../public/images/logo.png"
import Image from 'next/image';
import DropDown from './dropDown';
interface Product {
  name: string;
  description: string;
  href: string;
  icon: FC;
}

interface CallToAction {
  name: string;
  href: string;
  icon: FC;
}

const products: Product[] = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction: CallToAction[] = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 gap-3 item-center ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className=" w-auto"
              src={logo}
              alt=""
              width={40}
              height={40}
            />
          </a>
          <p className='text-sky-600 text-[30px] font-bold'>BawdicSoft</p>
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
        <a href="#" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Home
          </a>
          <DropDown />
          <a href="#" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Portfolio
          </a>
          <a href="#" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            About Us
          </a>
          <a href="#" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Careers
          </a>
          <a href="#" className="text-sm font-bold leading-6 text-sky-600 hover:text-black text-[17px]">
            Contact Us
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm"
        >
      </Dialog.Panel>
    </Dialog>
  </header>
);
}

export default Navbar;