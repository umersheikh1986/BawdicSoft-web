import {FC} from "react"
import mission from "../../../public/images/aboutImages/mission.jpg"
import vision from "../../../public/images/aboutImages/vision.jpg"
import { StaticImageData } from 'next/image';
import Image from "next/image";
interface OurVisionMissionProps {}
type heroImg = {
  img : StaticImageData
}
const data: heroImg[] = [{img:mission}, {img:vision}]
const OurVisionMission:FC<OurVisionMissionProps> = () => {
    return(<div className="bg-white pt-20 md:px-24 lg:px-40 px-10 pb-16">
    {/*  */}
  <div className="grid grid-clos-1 md:grid-cols-2  gap-16 pt-10 ">
<div className="flex flex-col  ">
    <p className="mb-4  text-2xl text-start font-extrabold tracking-tight leading-none  md:text-3xl lg:text-5xl">Our Vision</p>
    <p className="mb-4 text-start text-lg  text-semibold leading-7  tracking-tight   ">We desire to generate ideas that would make an impact in the digital era. We strive to make technology accessible to everyone regardless of geographical and intellectual boundaries. We want to be the desirable choice for our customers and to serve them with the best possible innovative solutions..</p>
</div>
<div>
    <Image src={data[1].img.src} alt=""   className="w-full h-60 md:w-[500px] md:h-80 " width={600} height={600}/>
</div>
  </div>

  {/*  */}
  <div className="grid grid-clos-1 md:grid-cols-2  gap-16 pt-10 ">
<div>
    <Image src={data[0].img.src} alt=""   className="w-full h-60 md:w-[500px] md:h-80 order-1" width={600} height={600}/>
</div>
<div className="flex flex-col   order-first md:order-none ">
    <p className="mb-4  text-2xl text-start font-extrabold tracking-tight leading-none  md:text-3xl lg:text-5xl">Our Mission</p>
    <p className="mb-4 text-start  text-lg  text-semibold  leading-7 ">To deliver customized and cost effective digital solutions to our clients while providing efficiency, automation, and enhanced security..</p>
   
</div>
  </div>

    </div>)
}
export default OurVisionMission;

