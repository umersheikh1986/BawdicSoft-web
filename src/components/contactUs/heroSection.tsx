import { FC } from "react"
interface heroSectionProps {}
import HerSectionimg from "../../../public/images/contactus.jpg"
import { StaticImageData } from 'next/image';
type heroImg = {
  img : StaticImageData
}
const data: heroImg = {img:HerSectionimg}
const HeroSection :FC<heroSectionProps> = () => {
return (<div>
<section className=" bg-center bg-cover bg-no-repeat  bg-gray-400 bg-blend-multiply" style={{
         backgroundImage:`url(${data.img.src})`, 
      height: 'calc(100vh - 48px)', 
    }}>
    <div className="px-4 mx-auto  text-center pt-44 md:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-5 text-white md:text-5xl lg:text-5xl -ml-30">Feel Free To​</h1>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">Contact Us
 </p>
      
    </div>
</section>
</div>)
}
export default HeroSection;