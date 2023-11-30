import React, { FC, ReactNode, MouseEvent } from 'react';
// import heroSecImg from "../../public/images/final-head.webp"

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <div  style={{
        backgroundImage:`url(https://bawdicsoft.com/wp-content/uploads/2022/08/final-head.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '710px',
    }} className='relative '>
     <div className='flex justify-center flex-wrap items-end h-[384px]  -ml-40 absolute inset-0 bg-black opacity-50'>
        <h1 className='font-black text-5xl md:text-[60px] lg:text-[70px] text-white mx-auto w-[200px]  md:w-[500px] lg:w-[800px]'>Developing the Future
Today</h1>
     </div>
     <div className='flex justify-center flex-wrap items-start h-[328px] pt-5 -ml-40 top-96 absolute inset-0 bg-black opacity-50'>
<p className='font-semibold text-[25px] !text-white mx-auto w-[200px] md:w-[500px] lg:w-[800px]'>Our team of expert developers can quickly deliver innovative web application
and Web3 development solutions with improved security and optimized
performance.
</p>
    </div>
    </div>
  );
};

export default HeroSection;