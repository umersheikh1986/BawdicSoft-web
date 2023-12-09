import { FC } from "react"
interface WeOfferSectionProps { }
const WeOfferSection: FC<WeOfferSectionProps> = () => {
    return (
        <div>
            <div className="pt-10  md:px-24 md:pt-16 pb-20 md:pb-20 bg-sky-950">

                <p className="text-4xl font-bold text-center text-white">What we offer</p>
                <p className="text-md text-gray-200  text-center leading-7 pb-5 pt-5">Our team of expert crypto token developers specialise in developing custom logic-based crypto tokens for any Blockchain as per your needs. We integrate standardized token scripts into your custom requirements and test them to perform flawlessly in the open market.</p>
                <div className="grid grid-cols-1 md:grid-cols-3  md:px-16 gap-10">

                    <div className=" border-2 hover:border-sky-500   p-6  border border-gray-200 rounded-lg shadow ">
                        <span >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white text-center ">Cryptocurrency Tokens</h5>
                        </span>
                        <p className="mb-3 font-normal text-gray-700 text-white text-center">Get your cryptocurrency tokens to establish your brand with the ability to exchange with other cryptocurrencies. Empower your Blockchain business with unique Cryptocurrency tokens delivered swiftly to you.</p>
                    </div>
                    <div className=" border-2 hover:border-sky-500  p-6  border border-gray-200 rounded-lg shadow  ">
                        <span >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white  text-center">Utility Tokens</h5>
                        </span>
                        <p className="mb-3 font-normal text-gray-700 text-white text-center">We can demonstrate Utility tokens for your specific needs using our extended experience in the crypto market. Our tokens are error-free and tested in the open environment to enhance your business on the Blockchain.</p>
                    </div>
                    <div className=" border-2 hover:border-sky-500   p-6  border border-gray-200 rounded-lg shadow  ">
                        <span >
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white  text-center">Equity Tokens
</h5>
                        </span>
                        <p className="mb-3 font-normal   text-white text-center">Businesses are decentralizing at a booming pace and equity tokens are the current talk of the town. Equip your business with Equity Tokens and modernize your business with the help of our expert team.</p>
                    </div>
                   

                </div>
            </div>
       

        </div>)
}
export default WeOfferSection;