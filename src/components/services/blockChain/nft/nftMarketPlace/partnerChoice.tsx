import React, { FC, ReactNode, MouseEvent } from 'react';
import needImage from "../../../../../../public/images/blockChain/NFT/nftMarketPlace/partnerChoiseimg.webp"
import Image, { StaticImageData } from 'next/image';
interface partnerChoiceSectionProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: needImage }

const PartnerChoiceSection: FC<partnerChoiceSectionProps> = () => {
    console.log(imageData);
    return (
        <div className=''>

       <div className=' flex flex-wrap md:flex-nowrap gap-10 md:gap-20 justify-center py-16 items-center'>
        <div>
            <Image src={imageData.image.src} alt='' width={430} height={470} className='w-full md:[400px] lg:w-[500px] h-84 max-w-xl'/>
        </div>
        <div className='max-w-xl  px-5  '>
            <p className='font-bold text-4xl pb-8'>Partners of choice</p>
    <p className='text-md text-gray-800 leading-6'>NFTs have been proven to be one of the very few ideas that changed the whole landscape of today's digital world. Imagine profiting from the lucrative world of cryptocurrency using your real-world assets or an innovative idea and NFT makes it possible for you. These are digital tokens that generate a digital identity of your asset in an immutable hyper ledger. It not only provides you with the unparalleled security of blockchain but also enables you to keep track of your digital assets by putting an IP reserved digital token on your assets. We help you make it all possible by converting your innovative ideas into the most secure NFT tokens on any blockchain of your choice.</p>
        </div>
       </div>
        </div>

    );
};

export default PartnerChoiceSection;