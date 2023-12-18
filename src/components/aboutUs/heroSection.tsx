import React, { FC, ReactNode, MouseEvent } from "react";
import HerSectionimg from "../../../public/images/aboutusImg.webp";
import { StaticImageData } from "next/image";
interface HeroSectionProps {}
type heroImg = {
  img: StaticImageData;
};
const data: heroImg = { img: HerSectionimg };
const HeroSection: FC<HeroSectionProps> = () => {
  return (
    // <section
    //   className=" bg-center bg-cover bg-no-repeat  bg-gray-400 bg-blend-multiply"
    //   style={{
    //     backgroundImage: `url(${data.img.src})`,
    //     height: "calc(100vh - 48px)",
    //   }}
    // >
    //   <div className="px-4 mx-auto   text-center pt-44 md:py-56">
    //     <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl -ml-30">
    //       Who We Are​
    //     </h1>
    //     <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
    //       We have a strong belief in technology's potential, and a greater
    //       belief in human potential
    //     </p>
    //   </div>
    // </section>
    <section className="flex justify-center   bg-gradient-to-r from-sky-950   via-sky-700 via-30% to-sky-600 to-70%
     bg-blend-multiply"  style={{
          height: "calc(100vh - 48px)",
        }}>
 <h4 className=" text-3xl md:text-4xl  lg:text-7xl font-bold text-white  mt-44 md:mt-44">About Us</h4>
    </section>
  );
};

export default HeroSection;
