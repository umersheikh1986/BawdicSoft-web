import { FC } from "react";
interface MapSectionProps {}
import HerSectionimg from "../../../public/images/contactus.jpg";
import { StaticImageData } from "next/image";
type heroImg = {
  img: StaticImageData;
};
const data: heroImg = { img: HerSectionimg };
const MapSection: FC<MapSectionProps> = () => {
  return (
    // New Code 
    <section className="flex justify-center  items-center my-10">
<div>
<div className="mapouter"><div className="gmap_canvas"><iframe width="783" height="539" id="gmap_canvas" src="https://maps.google.com/maps?q=Farazana+building+karachi+pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no" ></iframe></div></div>
</div>
<div>

</div>
   </section>
  );
};
export default MapSection;