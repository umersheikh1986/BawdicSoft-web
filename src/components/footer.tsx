import { FC } from "react"
import logo from "../../public/images/logo.png"
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image"
import Link from "next/link";
interface footerProps {}
const Footer: FC<footerProps> = () => {
    return (<div>
<footer className="bg-black ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-evenly md:gap-30">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image src={logo} className="h-12 w-12  " alt="BowdicSoft Logo" />
                  <span className="self-center text-3xl font-semibold  text-sky-600 pl-2">BawdicSoft</span>
              </a>
              <p className="text-gray-200 leading-5 text-lg sm:w-[220px]  md:w-[300px]  lg:w-[500px] pt-4">BawdicSoft is a web application, blockchain, DeFi, NFT, and NFT Marketplace Development Company delivering quick and innovative web and web3 solutions with improved security and optimized performance.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-lg font-extrabold  uppercase text-sky-600">Company</h2>
                  <ul className="text-gray-100 font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:text-blue-400">Home</a>
                      </li>
                      <li className="mb-4">
                          <a href="/portfolio" className="hover:text-blue-400">Portfolio</a>
                      </li>
                      <li className="mb-4">
                          <a href="/about-us" className="hover:text-blue-400">About Us</a>
                      </li>
                      <li className="mb-4">
                          <a href="/careers" className="hover:text-blue-400">Careers</a>
                      </li>
                      <li className="mb-4">
                          <a href="/contact-us" className="hover:text-blue-400">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg  font-extrabold  uppercase  text-sky-600">Services</h2>
                  <ul className="text-gray-100  font-medium">
                      <li className="mb-4">
                          <a href="/web-application" className=" hover:text-blue-400">Web Application</a>
                      </li>
                      <li className="mb-4">
                          <a href="/defi" className="hover:text-blue-400">Blockchain</a>
                      </li>
                      <li>
                          <a href="/artificial-intelligence" className="hover:text-blue-400">Artifitial Intiligiance</a>
                      </li>
                  </ul>
              </div>
              <div className="md:flex-none flex justify-center md:mt-0 sm:-mt-16 md:justify-start md:items-start items-start flex-col">
                  <h2 className="mb-6 text-lg  font-extrabold  uppercase  text-sky-600">Contact Us</h2>
                  <ul className="text-gray-100  font-medium">
                      <li className="mb-4 flex gap-2">
                      <MdOutlineMailOutline className= "text-white text-2xl"/><span  className="">info@bawdicsoft.com</span>
                      </li>
                      <li className="flex gap-2">
                      <FaPhone   className= "text-white text-2xl" /> <span  className="">+1(203)-902-1401</span>
                      </li>
                  </ul>
                  {/* Media Links */}
                  <div className="flex justify-evenly  flex-wrap gap-2 pt-10 "> 
                    <Link href="https://wa.me/+923178866631" target="_blank" className="flex rounded-full bg-green-500 justify-center items-center p-2 cursor-pointer "><FaWhatsapp className="text-white text-2xl"/></Link>
                    <Link href="https://www.linkedin.com/company/77098544/admin/feed/posts/" target="_blank" className="flex rounded-full bg-sky-700 justify-center items-center p-2 cursor-pointer "><FaLinkedin className="text-white text-2xl"/></Link>
                    <Link href="https://twitter.com/BawdicSoft" target="_blank" className="flex rounded-full bg-sky-600 justify-center items-center p-2 cursor-pointer "><GrTwitter  className="text-white text-2xl"/></Link>
                    <Link href="https://www.facebook.com/BawdicSoftPvtLtd" target="_blank" className="flex rounded-full bg-sky-900 justify-center items-center p-2 cursor-pointer "><MdFacebook   className="text-white text-2xl"/></Link>
                 
                   
                  </div>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between md:px-14">
          <span className="text-md  text-gray-300 sm:text-center ">© 2018 <a href="/" className="hover:underline">BawdicSoft LLC</a>. All rights reserved.
          </span>
         
          <div>
            <p className="text-white text-md ">Privacy Policy</p>
          </div>
      </div>
    </div>
</footer>
    </div>)
}

export default Footer;