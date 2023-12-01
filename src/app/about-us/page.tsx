import DocumtentsSectins from "@/components/aboutUs/document";
import HeroSection from "@/components/aboutUs/heroSection";
import OurSevices from "@/components/aboutUs/ourServices";
import { FC } from "react";

interface aboutUsProps {}

 const AboutUs :FC<aboutUsProps> = () => {
  return (
    <>
   <div>
    <HeroSection />
    <DocumtentsSectins />
    <OurSevices />
   </div>
    </>
  )
}

export default AboutUs;
