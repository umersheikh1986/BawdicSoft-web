import { allData } from "@/components/allData";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
    const productOneDetail = allData.find(product => product.id.toString() === params.productId.toString())
    console.log(params)
    console.log(productOneDetail)
    return (<div>
        {productOneDetail?.Video && <div>
            {/* video section */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                <video
                    className="w-full " autoPlay controls >
                    <source src={productOneDetail.Video} type="video/mp4" />
                </video>
            <div className="flex justify-center my-auto pt-10 pb-5 md:pb-2 bg-gray-100 flex-col items-center  px-5">
                <p className="text-3xl font-bold  px-10 rounded-[30px] ">{productOneDetail?.mainTitle}</p>
                <p className="text-md font-md    px-10 rounded-[30px] pt-5">{productOneDetail?.projectDesc}</p>
            </div>
            </div>
            {/* text section */}
        </div>}
    </div>)
}

export default ProductDetails;