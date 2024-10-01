import { FC } from "react";
interface offerSectionProps {}
const OfferSectionCustomWeb: FC<offerSectionProps> = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="max-w-7xl pt-10 md:pt-16 px-5 pb-20 md:pb-32">
          <p className="text-2xl  md:text-4xl font-bold text-center">
            What we offer
          </p>
          <p className="text-md text-gray-600 font-semibold text-center leading-7 pb-5 pt-5 px-10">
            Our NFT development services encompass a wide range of personal and
            business categories in terms of token development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10  md:px-16   ">
            <div className=" border-2 hover:border-sky-800    p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Custom Website Design and Development
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Tailored website design that aligns with your brand's identity
                and business goals.Custom layouts, features, and functionality
                designed from scratch.
              </p>
            </div>
            <div className="  border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Responsive and Mobile-First Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Ensure that websites are fully optimized for all devices,
                including smartphones, tablets, and desktops.Mobile-first design
                approach to cater to modern users' preferences.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  (UX) and (UI) Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Focus on creating intuitive, user-friendly interfaces that
                enhance the customer journey. Detailed UX research and UI design
                to provide seamless navigation and interaction.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Search Engine Optimization
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                On-page SEO practices integrated into the design process.
                Fast-loading, SEO-optimized websites to improve rankings and
                visibility on search engines.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Custom E-commerce Solutions
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Custom-built online stores with secure payment gateways,
                shopping carts, and inventory management. Integration with
                e-commerce platforms like Shopify or WooCommerce.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Content Management System (CMS) Integration
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Websites powered by easy-to-use CMS platforms such as WordPress,
                allowing you to manage content easily.Custom CMS solutions for
                specific needs.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Custom Web Application Development
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Development of custom web applications, portals, and platforms
                to meet specific business requirements. Scalable and flexible
                solutions that evolve with your business.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Branding and Graphic Desig
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Design of logos, banners, and other visual elements to create a
                cohesive brand image. Integration of branding elements
                throughout the website for consistency.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Domains
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                We provide a domain for your domain by creating Customize design
                Web Application for your domain.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Talk */}
      <div className="flex justify-center">
        <div className="bg-sky-900 mx-5 max-w-7xl text-center  rounded-[20px]    py-8 px-4 md:px-16 flex flex-col justify-center items-center">
          <p className="text-white font-bold text-2xl  md:text-3xl lg:text-4xl">
            Talk to one of our experts and get a quote on your project.
          </p>
          <a className="text-gray-700  font-semibold mt-4 text-md px-5 hover:bg-sky-400 hover:text-white py-3 bg-gray-100">
            Talk To Us
          </a>
        </div>
      </div>
    </div>
  );
};
export default OfferSectionCustomWeb;
