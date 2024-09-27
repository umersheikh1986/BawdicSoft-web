import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa6";
import { IoFlashOutline } from "react-icons/io5";
import { SlSupport } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="max-auto">
        <div className="bg-sky-700 p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* First sub-div */}
            <div className=" place-items-center justify-between p-10  flex flex-col items-center">
              {/* <h3 className="text-xl font-semibold mb-4">First Sub-Div</h3> */}

              <div className="flex flex-col items-center space-y-4">
                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>

                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Second sub-div (spanning 2 columns) */}
            <div className=" text-white p-16  md:col-span-2">
              <h3 className="text-3xl font-semibold mb-4">
                Find the Right Services,
              </h3>
              <h3 className="text-3xl font-semibold mb-4">Right Away</h3>
              {/* <p className="mb-4">
                This is the content of the second sub-div, which spans 2
                columns.
              </p> */}

              {/* Search bar */}
              <div className=" mt-10 relative">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="w-full p-4 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="absolute right-2 top-2 bg-gradient-to-r from-sky-950 px-8  via-sky-700 via-30% to-sky-600 to-70%
    bg-blend-multiply text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  <BsSearch className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Third sub-div */}
            <div className=" place-items-center justify-between p-10  flex flex-col items-center">
              {/* <h3 className="text-xl font-semibold mb-4">First Sub-Div</h3> */}

              <div className="flex flex-col items-center space-y-4">
                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>

                <div className="border-2 rounded-lg border-gray-700">
                  <img
                    src="https://i.pinimg.com/originals/25/ac/28/25ac28d0d4e297348c00ccc5285339ed.png"
                    alt="Dummy Image"
                    className="w-40 h-40 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 bg-gray-100">
          <div>
            <h2 className="text-3xl"> Popular Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 ">
            {/* Card 1 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                AI Services
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className=" border-2 mt-8 rounded-lg border-gray-700">
                <img
                  src="/images/AI.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                NFT and Smart Contracts
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className="  border-2 mt-2 rounded-lg border-gray-700">
                <img
                  src="/images/nft.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white  text-xl font-semibold mb-4 text-center">
                {" "}
                Web Development
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className="border-2 mt-2 rounded-lg border-gray-700">
                <img
                  src="/images/web.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-white text-xl font-semibold mb-4 text-center">
                Blockchain Services
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className=" border-2 mt-2 rounded-lg border-gray-700">
                <img
                  src="/images/bit.jpg"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-sky-700  p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl text-white font-semibold mb-4 text-center">
                Cybersecurity
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className=" border-2 mt-8 rounded-lg border-gray-700">
                <img
                  src="/images/hacker.png"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-sky-700 p-5 rounded-lg shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4 text-white text-center">
                Programming & Tech
              </h3>
              {/* <p className="text-center mb-4">This is the content of card 1.</p> */}
              <div className="bg-white border-2 rounded-lg border-gray-700">
                <img
                  src="/images/tech.png"
                  alt="Dummy Image"
                  className="w-40 h-40 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            border: "2",
            height: "2px",
            background: "skyblue",
            margin: "20px 0",
          }}
        />
        <div className="">
          <h2 className="text-3xl p-6 mx-auto ">
            {" "}
            Cutting-Egde Software Talent At Your Finger Print{" "}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 p-6">
            <div className="bg-white border-2 border-sky-700 shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                <CiGrid41 className="w-12 h-12" />
              </h3>
              <p className="text-gray-600">
                Your One-Stop Shop: 10 Essential Categories
              </p>
              <p className="mt-6">
                Get Results from Skilled freelancers from all over the world,
                for any task , At any Price point{" "}
              </p>
            </div>
            <div className="bg-white  border-2 border-sky-700 shadow-md rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-4">
                <FaRegHandshake className="w-14 h-14" />
              </h3>
              <p className="text-xl text-gray-600">
                Tranparent Pricing structure
              </p>

              <p className="mt-10">
                {" "}
                Pay per project or by the hour (Pro). Payment Only get released
                When You approve{" "}
              </p>
            </div>
            <div className="bg-white  border-2 border-sky-700 shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                <IoFlashOutline className="w-12 h-12" />
              </h3>
              <p className="text-gray-600 text-xl">
                Fast-Tracked Quality Solution
              </p>
              <p className="mt-12">
                Filter to find the right freelancers quickly and get great work
                delivered in no time , every time
              </p>
            </div>
            <div className="bg-white  border-2 border-sky-700 shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">
                <SlSupport className="w-12 h-12" />
              </h3>
              <p className="text-gray-600 text-xl">24/7 customer support.</p>
              <p className="mt-12">
                Chat With Our Team To Get Your Questions Answered Or Resolve Any
                Issues With Your Orders.{" "}
              </p>
            </div>
          </div>
        </div>

        <hr
          style={{
            border: "2",
            height: "2px",
            background: "skyblue",
            margin: "20px 0",
          }}
        />
        <div className="relative bg-blue-500 p-6 text-white  mx-auto  h-[250px]  max-w-7xl rounded-lg shadow-lg">
          <h1 className="text-5xl text-center font-bold mb-4">
            Seamless Access to Software Expertise!…
          </h1>
          <div className="absolute top-1/2 left-1/2  border-2  border-white inline-block text-center p-4">
            <p className="text-4xl">Join </p>
          </div>
        </div>
        {/* Footer  */}
        <hr
          style={{
            border: "2",
            height: "2px",
            background: "skyblue",
            margin: "20px 0",
          }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 h-[250px] lg:grid-cols-5  p-6">
          <div className="bg-blue-500 text-white p-4  ">
            <p className="text-xl  text-center">Categories</p>
            <ul className="mt-6 gap-3">
              <li className="text-center">Graphics & Design</li>
              <li className="mt-2 text-center">Digital Marketing</li>
            </ul>
          </div>
          <div className="bg-blue-500 text-white p-4  ">
            <p className="text-xl text-center">For Clients</p>
            <ul className="mt-6">
              <li className="text-center">How Fiver Works</li>
              <li className="mt-2 text-center">Customer Success Stories</li>
            </ul>
          </div>
          <div className="bg-blue-500 text-white p-4  ">
            <p className="text-center">For Freelancers</p>
            <ul className="mt-6">
              <li className="text-center">Become A Fiver Freelancer</li>
              <li className="mt-2  text-center">Customer Success Stories</li>
            </ul>
          </div>
          <div className="bg-blue-500 text-white p-4  ">
            <p className="text-center">Bussiness Solutions</p>
            <ul className="mt-6">
              <li className="text-center">Fiver Pro</li>
              <li className="mt-2  text-center">
                Project Management Services{" "}
              </li>
            </ul>
          </div>
          <div className="bg-blue-500 text-white p-4  ">
            <p className="text-center">Company</p>
            <ul className="mt-6">
              <li className="text-center">About Fiver</li>
              <li className="mt-2  text-center">Help and Support </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
