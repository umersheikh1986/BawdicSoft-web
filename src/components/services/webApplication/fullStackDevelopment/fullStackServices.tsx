import React, { FC, ReactNode, MouseEvent } from "react";
// import needImage from "../../../../../../public/images/blockChain/NFT/nftMarketPlace/fullStackImage.webp";
import Image, { StaticImageData } from "next/image";
// import AnimatedComponentLeft from "@/components/home/animationLeft";
interface fullStackSectionProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: needImage };

const FullStackServiceSection: FC<fullStackSectionProps> = () => {
  // console.log(imageData);
  return (
    <div className="flex justify-center">
      <div className="py-16 max-w-7xl">
        <div className="flex justify-center">
          <p className=" md:text-3xl lg:text-4xl text-2xl  max-w-6xl font-bold text-center pt-5 pb-5 px-8 md:px-16">
            We provide full-stack development services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  md:px-16  gap-10  py-8">
          <div className="px-5 md:px-0">
            {/* <AnimatedComponentLeft> */}
            <Image
              src={"/full-stacks.jpg"}
              alt=""
              width={3333330}
              height={222270}
              className="w-full  h-auto "
            />
            {/* </AnimatedComponentLeft> */}
          </div>
          <div className=" px-5 mt-10  ">
            <p className="text-md text-gray-800 leading-9">
              We offer a comprehensive range of digital services, including
              custom web design and development, full stack development,
              e-commerce solutions, and mobile app development. Our expertise
              extends to digital marketing and SEO, helping businesses enhance
              their online visibility and grow their audience. We also provide
              branding and graphic design services, cloud solutions, CMS
              development, and DevOps support to ensure seamless performance and
              scalability. Additionally, we offer ongoing maintenance, support,
              and analytics to optimize user experience and drive conversions.
              Our goal is to deliver tailored solutions that align with your
              business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStackServiceSection;
