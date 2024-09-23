"use client";
import Image from "next/image";
import { FC, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
interface formSectionProps {}
import { StaticImageData } from "next/image";
import formSectionimg from "../../../public/images/careers/formbg1.jpg";
type heroImg = {
  img: StaticImageData;
};
const data: heroImg = { img: formSectionimg };
const FormSection: FC<formSectionProps> = () => {
  const [depatement, setDepartment] = useState(false);
  const [experience, setExperience] = useState(false);
  const [Val1, setVal1] = useState("Select One");
  const [Val2, setVal2] = useState("Experience");
  const optionList = [
    {
      id: 1,
      title: "MERN Stack Developer",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 2,
      title: "MEAN Stack Developer",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 4,
      title: "Generative(AI) Developer",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 5,
      title: "Phyton Developer",
      desc: " Develops and maintains applications using Python programming language.",
      role: " Proficiency in Python, understanding of web frameworks (e.g., Django, Flask) experience with APIs, and knowledge of database systems.",
    },
    {
      id: 6,
      title: "UI/UX Designer",
      desc: " Designs user interfaces and experiences to ensure a seamless and engaging user interaction with digital products.",
      role: " Expertise in design tools (e.g., Adobe XD, Figma), knowledge of user-centered design principles, experience with wireframing and prototyping, and ability to conduct user research.",
    },
    {
      id: 7,
      title: "Block Chain Developer",
      desc: " Develops and implements blockchain-based solutions and applications.",
      role: " Knowledge of blockchain technologies (e.g., Ethereum, Bitcoin), experience with smart contracts, understanding of cryptographic protocols, and familiarity with  decentralized applications (dApps).",
    },
    {
      id: 8,
      title: "WordPress Developer",
      desc: " Designs, develops, and maintains WordPress websites and themes.",
      role: " Proficiency in PHP, HTML, CSS, JavaScript, experience with WordPress themes and plugins, and understanding of website performance optimization.",
    },
  ];
  return (
    <div>
      <section
        className="relative bg-center bg-cover bg-no-repeat flex justify-center h-[1200px] md:h-[750px] items-center  bg-gray-400 bg-blend-multiply mb-96 md:mb-[500px] "
        style={{
          backgroundImage: `url(${data.img.src})`,
        }}
      >
        <div className="absolute -bottom-80 md:-bottom-80 p-5 md:p-8 lg:p-10 grid-flow-row grid grid-cols-1 md:grid-cols-2 mx-6 rounded-3xl gap-8 md:gap-0  bg-white shadow-2xl max-w-6xl">
          <div className="bg-white flex flex-col  items-center pb-10">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-4">
              Join Our Team
            </h2>
            <p className=" text-sm  md:text-lg text-center ">
              Grow professionally with a team of sharp-witted geeks with tons of
              experience & added benefits
            </p>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="pl-4">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-sky-100 focus:outline-none focus:ring focus:border-sky-950  rounded-xl p-4 py-2 "
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <label className="pl-4">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="bg-sky-100 focus:outline-none focus:ring focus:border-sky-950  rounded-xl p-4 py-2 "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="pl-4">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-sky-100 focus:outline-none focus:ring focus:border-sky-950  rounded-xl p-4 py-2 "
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="relative flex flex-col">
                  <label className="pl-4">Departments</label>
                  <button
                    id="dropdownRadioHelperButton"
                    onClick={() => setDepartment(!depatement)}
                    data-dropdown-toggle="dropdownRadioHelper"
                    className="bg-sky-100 text-gray-400 focus:outline-none focus:ring focus:border-sky-950 flex justify-between items-center rounded-xl p-4 py-2 "
                    type="button"
                  >
                    {Val1}
                    {!depatement ? (
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
                    ) : (
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 8"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                        />
                      </svg>
                    )}
                  </button>

                  {depatement && (
                    <div
                      id="dropdownRadioHelper"
                      className="z-10 absolute h-32 md:h-60 overflow-y-auto top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 "
                    >
                      <ul
                        className="p-3 space-y-1 text-sm text-gray-700"
                        aria-labelledby="dropdownRadioHelperButton"
                      >
                        <li
                          onClick={() => {
                            setVal1("Engineering");
                            setDepartment(!depatement);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-1"
                                className="font-medium text-gray-900"
                              >
                                <div>Engineering</div>
                                <p
                                  id="helper-radio-text-4"
                                  className="text-xs font-normal text-gray-500"
                                >
                                  Some helpful instruction goes over here.
                                </p>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal1("Quality Assurance");
                            setDepartment(!depatement);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-2"
                                className="font-medium text-gray-900"
                              >
                                <div>Quality Assurance</div>
                                <p
                                  id="helper-radio-text-5"
                                  className="text-xs font-normal text-gray-500"
                                >
                                  Some helpful instruction goes over here.
                                </p>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal1("Project Management");
                            setDepartment(!depatement);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-3"
                                className="font-medium text-gray-900"
                              >
                                <div>Project Management</div>
                                <p
                                  id="helper-radio-text-6"
                                  className="text-xs font-normal text-gray-500"
                                >
                                  Some helpful instruction goes over here.
                                </p>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal1("Digital Marketing");
                            setDepartment(!depatement);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-4"
                                className="font-medium text-gray-900"
                              >
                                <div>Digital Marketing</div>
                                <p
                                  id="helper-radio-text-6"
                                  className="text-xs font-normal text-gray-500"
                                >
                                  Some helpful instruction goes over here.
                                </p>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal1("UI/UX designing");
                            setDepartment(!depatement);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-5"
                                className="font-medium text-gray-900"
                              >
                                <div>UI/UX designing</div>
                                <p
                                  id="helper-radio-text-6"
                                  className="text-xs font-normal text-gray-500"
                                >
                                  Some helpful instruction goes over here.
                                </p>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal1("Others");
                            setDepartment(!depatement);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-6"
                                className="font-medium text-gray-900"
                              >
                                <div>Others</div>
                                <p
                                  id="helper-radio-text-6"
                                  className="text-xs font-normal text-gray-500"
                                >
                                  Some helpful instruction goes over here.
                                </p>
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col">
                  <label className="pl-4">Experience</label>
                  <button
                    id="dropdownRadioHelperButton"
                    onClick={() => setExperience(!experience)}
                    data-dropdown-toggle="dropdownRadioHelper"
                    className="bg-sky-100 text-gray-400 focus:outline-none focus:ring focus:border-sky-950 flex justify-between items-center rounded-xl p-4 py-2 "
                    type="button"
                  >
                    {Val2}
                    {!experience ? (
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
                    ) : (
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 8"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
                        />
                      </svg>
                    )}
                  </button>

                  {experience && (
                    <div
                      id="dropdownRadioHelper"
                      className="z-10 absolute top-16 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 "
                    >
                      <ul
                        className="p-3 space-y-1 text-sm text-gray-700"
                        aria-labelledby="dropdownRadioHelperButton"
                      >
                        <li
                          onClick={() => {
                            setVal2("Less then 1 year");
                            setExperience(!experience);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-1"
                                className="font-medium text-gray-900"
                              >
                                <div>Less then 1 year</div>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal2("1 year");
                            setExperience(!experience);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-2"
                                className="font-medium text-gray-900"
                              >
                                <div>1 year</div>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal2("2 years");
                            setExperience(!experience);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-3"
                                className="font-medium text-gray-900"
                              >
                                <div>2 years</div>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal2("3 years");
                            setExperience(!experience);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-4"
                                className="font-medium text-gray-900"
                              >
                                <div>3 years</div>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal2("4 years");
                            setExperience(!experience);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-5"
                                className="font-medium text-gray-900"
                              >
                                <div>4 years</div>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => {
                            setVal2("More then 5 years");
                            setExperience(!experience);
                          }}
                        >
                          <div className="flex p-2 rounded hover:bg-gray-100">
                            <div className="ms-2 text-sm">
                              <label
                                htmlFor="helper-radio-6"
                                className="font-medium text-gray-900"
                              >
                                <div>More then 5 years</div>
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="pl-4">LinkedIn URL</label>
                <input
                  type="text"
                  placeholder="LinkedIn URL"
                  className="bg-sky-100 focus:outline-none focus:ring focus:border-sky-950  rounded-xl p-4 py-2 "
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="pl-4">Resume</label>
                <input
                  type="file"
                  className="block w-full text-sm 
        file:mr-4 file:py-3 file:px-4 file:rounded-3xl
        file:border-0 file:text-sm file:font-semibold
        file:bg-sky-100 file:text-gray-500 py-2
        hover:file:bg-sky-200 "
                />
              </div>
              <button className="bg-gradient-to-r from-sky-950   via-sky-700 via-30% to-sky-600 to-70% px-8 md:px-16 hover:bg-sky-700 py-3 md:py-3 md:basis-1/4 text-white font-semibold  rounded-3xl">
                {" "}
                Submit
              </button>
              {/* <div> */}

              {/* <a href="#_" className="relative p-0.5 inline-flex items-center justify-center md:basis-1/4 font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400 w-full">
                  <span className="relative text-white ">Button Text</span>
                </span>
              </a> */}
              {/* </div> */}
            </form>
          </div>
          <div className="flex flex-col bg-white ">
            <div>
              <h2 className="text-sky-800 font-semibold text-center text-2xl pb-4 ">
                Welcome to Bawdicsoft{" "}
              </h2>
            </div>
            <div className="flex flex-col gap-5 overflow-y-auto bg-transparent p-5 lg:px-16  max-h-[500px]  rounded-3xl">
              {optionList.map((opt) => {
                return (
                  <div
                    key={opt.id}
                    className="p-5  bg-gradient-to-r from-sky-900   via-sky-700 via-30% to-sky-700 to-70% rounded-3xl text-white"
                  >
                    <p className="text-lg font-semibold ">{opt.title}</p>
                    <p className="text-md text-gray-100">Role :{opt.desc}</p>
                    <p className="text-md text-gray-100">
                      {" "}
                      Skills : {opt.role}{" "}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FormSection;
