import React, { FC, ReactNode, MouseEvent } from 'react';
interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className=" bg-center bg-cover bg-no-repeat bg-[url('https://bawdicsoft.com/wp-content/uploads/2022/09/62cda24e2d853aa7b377a572_header-illustration.svg')] bg-gray-900 bg-blend-soft-light" style={{
      height: 'calc(100vh - 48px)', 
  }}>
    <div className="px-4 mx-auto  text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl md:mx-32 -ml-30">We are innovating today, for a better future​</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Integrating web and web3 in your daily life creating modern solutions for the digital world.
 </p>
      
    </div>
</section>

  );
};

export default HeroSection;