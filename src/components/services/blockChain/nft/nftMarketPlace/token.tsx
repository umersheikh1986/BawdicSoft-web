import { FC } from "react";
interface toeknProps {}
const TokenSection:FC<toeknProps> = () => {
    return ( <div>
        <div className="pt-10 md:pt-16 pb-20 md:pb-32 bg-sky-950">
            <div className='flex justify-center'>
                <p className=' md:text-3xl lg:text-4xl  text-2xl  text-white max-w-5xl font-bold text-center pt-5 pb-5 px-16'>We use ERC721 and ERC1155 token standards</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-32 lg:mx-48">

                <div className="pb-4  border-2 border-gray-200 hover:border-blue-400  p-3   rounded-lg  ">
                    <span >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">ERC721</h5>
                    </span>
                    <p className="mb-3 font-normal text-gray-700  text-white">ERC721 is an effective and highly functional token standard that is exclusively used to run non-fungible token functionalities in a perfect manner. We design and develop your NFT marketplace using our unique and business-specific ERC-721 token.</p>
                </div>
                <div className=" pb-4 border-2 border-gray-200 hover:border-blue-400   p-3   rounded-lg  ">
                    <span >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">ERC1155</h5>
                    </span>
                    <p className="mb-3 font-normal text-gray-700  text-white">Being developed significantly by the Enjin Network, it works well for all clone-based NFT marketplace software. It is used to create both fungible and non-fungible assets in the Ethereum blockchain.</p>
                </div>

            </div>
        </div>
    </div>)
}
export default TokenSection;