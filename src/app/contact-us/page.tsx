import FormSection from "@/components/contactUs/formSection";
import HeroSection from "@/components/contactUs/heroSection";
import MapSection from "@/components/contactUs/mapSection";
import { FC } from "react"
interface contactUsProps {}

const ContactUs :FC<contactUsProps> = () => {
return (<div>
  <HeroSection />
  <MapSection />
  <FormSection />
</div>)
}
export default ContactUs;