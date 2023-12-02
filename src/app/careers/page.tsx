
import FormSection from "@/components/careers/form";
import HeroSection from "@/components/careers/heroSectin";
import { FC } from "react"
interface careersProps {}

const Careers :FC<careersProps> = () => {
return (<div>
 <HeroSection />
 <FormSection />
</div>)
}
export default Careers;