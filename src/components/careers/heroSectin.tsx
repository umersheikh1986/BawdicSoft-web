import React, { FC, ReactNode, MouseEvent } from 'react';
import HerSectionimg from "../../../public/images/aboutusImg.webp"
import { StaticImageData } from 'next/image';
interface HeroSectionProps {}
type heroImg = {
  img : StaticImageData
}
const data: heroImg = {img:HerSectionimg}
const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className=" bg-center bg-cover bg-no-repeat  bg-gray-400 bg-blend-multiply" style={{
      backgroundImage:`url(${data.img.src})`, 
      height: 'calc(100vh - 48px)', 
  }}>
    <div className="px-4 mx-auto  text-center pt-44 md:py-72">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl -ml-30">Join Our Team​</h1>
     
      
    </div>
</section>

  );
};

export default HeroSection;