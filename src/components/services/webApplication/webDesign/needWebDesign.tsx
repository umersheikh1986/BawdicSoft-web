import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../../../public/images/blockChain/NFT/nftDevelopmentImages/needImage.webp";
import Image, { StaticImageData } from "next/image";
import AnimatedComponentLeft from "@/components/home/animationLeft";
interface NeedNftProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const NeedWebDesign: FC<NeedNftProps> = () => {
  // console.log(imageData);
  return (
    <div className="bg-sky-950 flex justify-center">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2  md:px-16    py-16 ">
        <AnimatedComponentLeft>
          <div>
            <img src="/web2.jpg" className="w-96 h-96 px-5 md:px-0 " />
          </div>
        </AnimatedComponentLeft>

        <div className=" pt-10 px-5  md:pt-5 ">
          <p className="mb-4 text-3xl font-semibold tracking-tight leading-7 text-white md:text-4xl lg:text-5xl ">
            Why and Where do you need Web Designing?
          </p>
          <p className="text-md text-gray-200 leading-6">
            Web design is essential in today’s digital landscape as it shapes
            how users perceive and interact with websites. A well-designed site
            enhances user experience, boosts credibility, and ensures mobile
            responsiveness, which is critical in a mobile-first world. It plays
            a crucial role in driving conversions, improving SEO, and
            maintaining brand consistency. Whether for businesses, blogs, or
            educational platforms, effective web design is key to capturing
            attention and delivering a seamless experience across devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeedWebDesign;
