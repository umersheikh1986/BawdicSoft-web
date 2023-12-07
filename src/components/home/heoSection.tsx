import React, { FC, ReactNode, MouseEvent } from 'react';
// import heroSecImg from "../../public/images/final-head.webp"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="  bg-center bg-cover bg-no-repeat bg-[url('https://bawdicsoft.com/wp-content/uploads/2022/08/final-head.webp')] bg-gray-400 bg-blend-multiply" style={{
        height: 'calc(100vh - 48px)', 
    }}>
    <div className="px-4 mx-auto   text-center pt-60 md:py-44 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl -ml-30">Developing the Future Today</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Our team of expert developers can quickly deliver innovative web application and Web3 development solutions with improved security and optimized
 performance.</p>
      
    </div>
</section>
  );
};

export default HeroSection;


