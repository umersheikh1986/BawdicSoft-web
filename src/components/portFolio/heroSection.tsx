import React, { FC, ReactNode, MouseEvent } from 'react';
interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="h-[600px] bg-center bg-cover bg-no-repeat bg-[url('https://bawdicsoft.com/wp-content/uploads/2022/09/62cda24e2d853aa7b377a572_header-illustration.svg')] bg-gray-900 bg-blend-soft-light">
    <div className="px-4 mx-auto  text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl -ml-30">Who We Are​</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">We have a strong belief in technology's potential, and a greater belief in human potential
 </p>
      
    </div>
</section>

  );
};

export default HeroSection;