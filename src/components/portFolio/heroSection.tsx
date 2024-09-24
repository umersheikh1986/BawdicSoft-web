import React, { FC, ReactNode, MouseEvent } from "react";
interface HeroSectionProps {}
import HerSectionimg from "../../../public/images/portfolioimg.gif";
import { StaticImageData } from "next/image";

type heroImg = {
  img: StaticImageData;
};
const data: heroImg = { img: HerSectionimg };
const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section
      className=" bg-center bg-cover bg-no-repeat  bg-gray-900 bg-blend-soft-light"
      style={{
        backgroundImage: `url(${data.img.src})`,
        height: "calc(100vh - 48px)",
      }}
    >
      <div className="relative  flex flex-col justify-center items-center mx-auto text-center max-w-9xl">
        <h1 className="mb-4 mt-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl animate-zoomInOut">
          We are innovating today, for a better future
        </h1>

        <p className="mt-64 font-extrabold tracking-tight mb-8 md:text-4xl lg:text-4xl text-3xl mx-auto  text-gray-300  text-center">
          Integrating web and web3 in your daily life creating modern solutions
          for the digital world.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
