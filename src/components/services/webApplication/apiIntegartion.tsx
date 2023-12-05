import React, { FC, ReactNode, MouseEvent } from 'react';
import needImage from "../../../../public/images/webApplication/apiintigration.jpg"
import Image, { StaticImageData } from 'next/image';
interface ApiIntegrationProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: needImage }

const ApiIntegration: FC<ApiIntegrationProps> = () => {
    console.log(imageData);
    return (
        <div className='flex justify-center items-center'>

       <div className=' grid grid-cols-1 gap-5  md:grid-cols-2    py-16'>
        <div>
            <Image src={imageData.image.src} alt='' width={430} height={400} className=' w-full h-96 md:w-[500px] md:h-96  '/>
        </div>
        <div className='max-w-lg lg:max-w-lg  pt-10 px-5  md:pt-5 '>
    <p className='mb-4 text-3xl  font-semibold tracking-tight leading-7 md:text-3xl lg:text-4xl '>
API Integration​​</p>
    <p className='text-md text-gray-800 leading-6'>Your web application must know what data to save where, and when and how to fetch it back so API integration plays a major role in making your web application fully functional. We provide advanced API integration within while developing your web application to make your data safe, secure, swift and organised.​</p>
        </div>
       </div>
        </div>

    );
};

export default ApiIntegration;