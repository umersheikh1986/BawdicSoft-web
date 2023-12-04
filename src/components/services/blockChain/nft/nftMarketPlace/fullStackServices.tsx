import React, { FC, ReactNode, MouseEvent } from 'react';
import needImage from "../../../../../../public/images/blockChain/NFT/nftMarketPlace/fullStackImage.webp"
import Image, { StaticImageData } from 'next/image';
interface fullStackSectionProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: needImage }

const FullStackSection: FC<fullStackSectionProps> = () => {
    console.log(imageData);
    return (
        <div className='py-16'>
            <div className='flex justify-center'>
<p className=' md:text-3xl lg:text-4xl text-2xl  max-w-6xl font-bold text-center pt-5 pb-5 px-16'>We provide full-stack development services for NFT marketplace</p>
            </div>
       <div className=' flex flex-wrap md:flex-nowrap gap-10 md:gap-20 justify-center py-16 items-center'>
        <div>
            <Image src={imageData.image.src} alt='' width={330} height={270} className='w-full md:w-[500px] h-84 max-w-xl'/>
        </div>
        <div className='max-w-xl  px-5  '>
    <p className='text-md text-gray-800 leading-6'>NFTs have been proven to be one of the very few ideas that changed the whole landscape of today's digital world. Imagine profiting from the lucrative world of cryptocurrency using your real-world assets or an innovative idea and NFT makes it possible for you. These are digital tokens that generate a digital identity of your asset in an immutable hyper ledger. It not only provides you with the unparalleled security of blockchain but also enables you to keep track of your digital assets by putting an IP reserved digital token on your assets. We help you make it all possible by converting your innovative ideas into the most secure NFT tokens on any blockchain of your choice.</p>
        </div>
       </div>
        </div>

    );
};

export default FullStackSection;