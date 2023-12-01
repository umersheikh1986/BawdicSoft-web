import Image from 'next/image';
import React, { FC, ReactNode, MouseEvent } from 'react';


interface ourSevicesProps {}

const OurSevices: FC<ourSevicesProps> = () => {
  return (
    <div className='bg-sky-900 py-20  px-64 lg:px-64'>
        <p className='text-white font-extrabold  text-3xl md:text-4xl text-center'>Our Services</p>
    
    <div className='flex justify-center flex-wrap gap-32 pt-12'>
        <div className='flex flex-col justify-center text-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/website-development-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
            <p  className='text-white font-bold text-xl '>Web Application</p>
        </div>
        <div className='flex flex-col justify-center  text-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/2637112_370799-PBNAS5-71.webp" alt='' width={30} height={30} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
            <p  className='text-white font-bold text-xl '>Blockchain</p>
        </div>
        <div className='flex flex-col justify-center text-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/56jhryur6.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
            <p  className='text-white font-bold text-xl'>Token development</p>
        </div>
        <div className='flex flex-col justify-center text-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/gdf345345-1536x1536.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
            <p  className='text-white font-bold text-xl'>DeFi</p>
        </div>
        <div className='flex flex-col justify-center text-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/435247898-1536x1536.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
            <p  className='text-white font-bold text-xl '>NFT Marketplace</p>
        </div>
        <div className='flex flex-col justify-center text-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/coins-paper-money-globe-white-statistic-form-background.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
            <p  className='text-white font-bold text-xl '>Currency Exchange</p>
        </div>
      
    </div>

    </div>
  );
};

export default OurSevices;