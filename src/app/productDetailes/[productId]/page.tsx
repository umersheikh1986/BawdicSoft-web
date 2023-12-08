import { allData } from "@/components/allData";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
    const productOneDetail = allData.find(product => product.id.toString() === params.productId.toString())
    console.log(params)
    console.log(productOneDetail)
    return (<div>
        {productOneDetail?.Video && <div>
            {/* video section */}
            <div className="">
                <video
                    className="w-full h-auto" autoPlay controls >
                    <source src={productOneDetail.Video} type="video/mp4" />
                </video>
            </div>
            {/* text section */}
            <div className="flex justify-center bg-gray-100 flex-col items-center md:px-16 lg:px-40 pb-8">
                <p className="text-3xl font-bold  py-5 mt-3 px-10 rounded-[30px] ">{productOneDetail?.mainTitle}</p>
                <p className="text-md font-md   mt-3 px-10 rounded-[30px] ">{productOneDetail?.projectDesc}</p>
            </div>
        </div>}
    </div>)
}

export default ProductDetails;