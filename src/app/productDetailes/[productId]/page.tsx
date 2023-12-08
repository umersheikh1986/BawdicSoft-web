import { allData } from "@/components/allData";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
    const productOneDetail = allData.find(product => product.id.toString() === params.productId.toString())
    console.log(params)
    console.log(productOneDetail)
    return (<div>
        {productOneDetail?.Video && <div className="flex justify-center items-center">
            {/* video section */}
            <div className="grid grid-cols-1 md:grid-cols-1 content-center lg:grid-cols-2">
                <div>
                <video
                    className="w-full h-auto  " autoPlay controls >
                    <source src={productOneDetail.Video} type="video/mp4" />
                </video>
                </div>
            <div className="flex justify-center pt-10 md:pt-5 pb-5 md:pb-2 bg-gray-100 flex-col items-center px-5">
                <p className=" text-2xl md:text-3xl font-bold  px-10 rounded-[30px] md:text-start text-center ">{productOneDetail?.mainTitle}</p>
                <p className="text-md font-md    px-10 rounded-[30px] pt-5 md:text-start text-center">{productOneDetail?.projectDesc}</p>
            </div>
            </div>
            {/* text section */}
        </div>}
    </div>)
}

export default ProductDetails;