import React, { FC, ReactNode, MouseEvent } from "react";
// import heroImage from "../../../../../../public/images/blockChain/NFT/nftDevelopmentImages/herosectionImage.jpg";
import { StaticImageData } from "next/image";
interface HeroSectionProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: heroImage };

const HeroSectionCustomWeb: FC<HeroSectionProps> = () => {
  // console.log(imageData);
  return (
    <section
      className=" pt-32 md:pt-0 bg-center bg-cover bg-no-repeat  bg-gray-500 bg-blend-multiply"
      style={{
        backgroundImage: `url(/hero-web.jpg)`,
        height: "calc(100vh - 48px)",
      }}
    >
      <div className="px-4 mx-auto max-w-7xl text-center md:pt-56 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl -ml-30">
          Custom Web App
        </h1>
        <p className="mb-8  md:text-lg font-normal text-gray-300 lg:text-xl sm:px-16 ">
          Innovative Web Design Services to Elevate Your Business
        </p>
      </div>
    </section>
  );
};

export default HeroSectionCustomWeb;
