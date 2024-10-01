import React, { FC, ReactNode, MouseEvent } from "react";
// import helpImage from "../../../../../../public/images/blockChain/NFT/nftDevelopmentImages/helpImage.webp";
import Image, { StaticImageData } from "next/image";
interface HelpSectionsProps {}

type imageList = {
  image: StaticImageData;
};
// const imageData: imageList = { image: helpImage };

const HelpSectionsWebDesign: FC<HelpSectionsProps> = () => {
  // console.log(imageData);
  return (
    <div className="flex justify-center ">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 place-items-center md:px-16 gap-10 py-16 ">
        <div className="px-5 md:pt-5 order-1 md:order-0">
          <p className="mb-4 text-3xl font-semibold tracking-tight leading-7 md:text-4xl lg:text-5xl ">
            How we can help
          </p>
          <p className="text-md text-gray-800 leading-6">
            We can help by offering expert web design services that focus on
            creating visually appealing, user-friendly, and mobile-responsive
            websites tailored to your needs. Whether you're looking to build an
            e-commerce site, a blog, or a corporate platform, our team ensures
            that your website is optimized for user experience, accessibility,
            and search engine performance. From enhancing your site’s
            functionality to creating a unique design that aligns with your
            brand, we provide comprehensive solutions that help you engage
            visitors and drive conversions effectively.
          </p>
        </div>
        <div className="order-0 md:order-1">
          <Image
            src={"/images/blockChain/NFT/nftDevelopmentImages/helpImage.webp"}
            alt=""
            width={330}
            height={300}
            className="w-80 h-80 md:w-96 md:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpSectionsWebDesign;
