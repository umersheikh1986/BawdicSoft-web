import { FC } from "react";
interface toeknProps {}
const TokenSection:FC<toeknProps> = () => {
    return ( <div>
        <div className="pt-10 md:pt-16 pb-20 md:pb-32 bg-sky-950">
            <div className='flex justify-center'>
                <p className=' md:text-3xl lg:text-4xl  text-3xl  text-white max-w-5xl font-bold text-center pt-5 pb-7 px-16'>Our tokens are</p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mx-8 md:mx-32 lg:mx-48">

                <div className="pb-4  border-2 border-gray-200 hover:border-blue-400  p-3   rounded-lg  ">
                    <a href="#">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-white">Customized</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700  text-lg text-white">Our tokens are fully customized to your business needs fulfilling all the requirements specific to your enterprise.</p>
                </div>
                <div className=" pb-4 border-2 border-gray-200 hover:border-blue-400   p-3   rounded-lg  ">
                    <a href="#">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-white">Automated</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700  text-lg text-white">We use vigorously tested token standards to generate your specific tokens making the creation process automated..</p>
                </div>
                <div className=" pb-4 border-2 border-gray-200 hover:border-blue-400   p-3   rounded-lg  ">
                    <a href="#">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-white">Easy to use</h5>
                    </a> 
                    <p className="mb-3 font-normal text-gray-700   text-lg text-white">Our DeFi tokens provide global access to your business as anyone from any part of the world can engage in business transactions using these tokens.</p>
                </div>
                <div className=" pb-4 border-2 border-gray-200 hover:border-blue-400   p-3   rounded-lg  ">
                    <a href="#">
                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-white">Reliable</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700  text-lg text-white">Your tokens are highly reliable backed by smart contracts generated using ERC20 standards providing security and reliability while using them.</p>
                </div>

            </div>
        </div>
    </div>)
}
export default TokenSection;