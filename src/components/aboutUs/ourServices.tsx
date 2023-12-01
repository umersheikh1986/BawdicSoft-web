import Image from 'next/image';
import React, { FC, ReactNode, MouseEvent } from 'react';


interface ourSevicesProps {}

const OurSevices: FC<ourSevicesProps> = () => {
  return (
    <div className='bg-sky-900 py-20 px-40'>
        <p className='text-white font-extrabold text-4xl text-center'>Our Services</p>
    
    <div className='flex flex-wrap gap-32'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/…lopment-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
            <p  className='text-white font-bold text-lg '>Web Application</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/…lopment-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
            <p  className='text-white font-bold text-lg '>Web Application</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/…lopment-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
            <p  className='text-white font-bold text-lg '>Web Application</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/…lopment-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
            <p  className='text-white font-bold text-lg '>Web Application</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/…lopment-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
            <p  className='text-white font-bold text-lg '>Web Application</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
            <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/…lopment-links-seo-webinar-cyberspace-concept.webp" alt='' className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
            <p  className='text-white font-bold text-lg '>Web Application</p>
        </div>
      
    </div>

    </div>
  );
};

export default OurSevices;