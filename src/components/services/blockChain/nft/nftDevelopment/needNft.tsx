import React, { FC, ReactNode, MouseEvent } from 'react';
import needImage from "../../../../../../public/images/blockChain/NFT/nftDevelopmentImages/needImage.webp"
import Image, { StaticImageData } from 'next/image';
interface NeedNftProps { }

type imageList = {
    image: StaticImageData
}
const imageData: imageList = { image: needImage }

const NeedNft: FC<NeedNftProps> = () => {
    console.log(imageData);
    return (
       <div className='bg-sky-950 grid grid-cols-1 md:grid-cols-2  md:px-16 lg:px-32 gap-10   py-16 '>
        <div>
            <Image src={imageData.image.src} alt='' width={330} height={300} className='w-96 h-96 px-5 md:px-0 '/>
        </div>
        <div className=' pt-10 px-5  md:pt-5'>
    <p className='mb-4 text-3xl font-semibold tracking-tight leading-7 text-white md:text-4xl lg:text-5xl '>Why and Where do you need NFTs?</p>
    <p className='text-md text-gray-200 leading-6'>NFTs have been proven to be one of the very few ideas that changed the whole landscape of today's digital world. Imagine profiting from the lucrative world of cryptocurrency using your real-world assets or an innovative idea and NFT makes it possible for you. These are digital tokens that generate a digital identity of your asset in an immutable hyper ledger. It not only provides you with the unparalleled security of blockchain but also enables you to keep track of your digital assets by putting an IP reserved digital token on your assets. We help you make it all possible by converting your innovative ideas into the most secure NFT tokens on any blockchain of your choice.</p>
        </div>
       </div>

    );
};

export default NeedNft;