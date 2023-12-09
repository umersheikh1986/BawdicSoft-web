import React, { FC, ReactNode, MouseEvent } from 'react';
import inregartingImage from "../../../../../../public/images/blockChain/NFT/nftDevelopmentImages/inregartingImage.webp"
import Image, { StaticImageData } from 'next/image';
interface IntegratSectionProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: inregartingImage }

const IntegratSection: FC<IntegratSectionProps> = () => {
    console.log(imageData);
    return (
       <div className='bg-sky-950 grid grid-cols-1 md:grid-cols-2  md:px-16 lg:px-32 gap-10  mt-8 py-16 md:mt-16'>
        <div>
            <Image src={imageData.image.src} alt='' width={330} height={300} className='w-96 h-96 '/>
        </div>
        <div className=' pt-10 px-5  md:pt-5'>
    <p className='mb-4 text-3xl font-semibold tracking-tight leading-7 text-white md:text-4xl lg:text-5xl '>Integrating NFTs into Business</p>
    <p className='text-md text-gray-200 leading-6'>All modern businesses are harnessing the power of blockchain to make their assets more secure by building NFTs. This puts a crypto value to your real-world asset by making it available on marketplaces like OpenSea removing barriers and enhancing the reach of your business. We resolve the development hassle for you by providing trusted non-fungible tokens for your business needs.</p>
        </div>
       </div>

    );
};

export default IntegratSection;