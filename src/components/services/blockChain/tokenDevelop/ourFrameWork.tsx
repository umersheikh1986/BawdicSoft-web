import React, { FC, ReactNode, MouseEvent } from 'react';
import img from "../../../../../public/images/blockChain/TokenExcahge/token_dev_process-970x1024.webp"
import Image, { StaticImageData } from 'next/image';
interface OurFrameWorkSectionProps { }
type myImg= {
    image:StaticImageData
}
const imageData:myImg = {image:img}
const OurFrameWorkSection: FC<OurFrameWorkSectionProps> = () => {
    return (
      <div className='py-16 px-8 md:px-32'>
        <p className=' text-3xl md:text-5xl font-bold pb-4 text-center'>Our Framework</p>
        <div className='flex justify-center'>
            <Image src={imageData.image.src} alt='' width={500} height={500} className='md:w-[800px] h-full' />
        </div>
      </div>
    );
};

export default OurFrameWorkSection;