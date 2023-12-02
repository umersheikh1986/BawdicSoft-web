
import HeroSection from "@/components/portFolio/heroSection";
import OurWorks from "@/components/portFolio/ourWorks";
import ProductServices from "@/components/portFolio/porductPortFolio";
import { FC } from "react"
interface portFolioProps {}

const PortFolio :FC<portFolioProps> = () => {
return (<div>
<HeroSection />
<ProductServices />
<OurWorks />
</div>)
}
export default PortFolio;