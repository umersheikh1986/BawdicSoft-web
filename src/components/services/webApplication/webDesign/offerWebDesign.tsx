import { FC } from "react";
interface offerSectionProps {}
const OfferSectionWebDesign: FC<offerSectionProps> = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <div className="max-w-7xl pt-10 md:pt-16 px-5 pb-20 md:pb-32">
          <p className="text-2xl  md:text-4xl font-bold text-center">
            What we offer
          </p>
          <p className="text-md text-gray-600 font-semibold text-center leading-7 pb-5 pt-5 px-10">
            Our Web development Design services encompass a wide range of
            personal and business categories given below
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10  md:px-16   ">
            <div className=" border-2 hover:border-sky-800    p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  UI/UX Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                We focus on user-centered design, ensuring the site is intuitive
                and easy to navigate. Our approach improves customer
                satisfaction, reduces bounce rates, and increases engagement.
              </p>
            </div>
            <div className="  border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  E-Commerce Web Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                We design user-friendly and secure e-commerce websites, complete
                with product listings, shopping carts, and payment gateways.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  WordPress & CMS Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                We specialize in designing and developing WordPress websites
                that are easy to manage, customize, and scale as your business
                grows.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Landing Page Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                : We create optimized landing pages for marketing campaigns,
                product launches, or lead generation. These pages are designed
                to capture user attention and encourage action, improving
                conversion rates
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  SEO-Friendly Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                Our web designs follow SEO best practices, ensuring your site
                ranks well on search engines. We focus on fast loading times,
                proper HTML structuring, mobile optimization, and clean coding
                to boost your online visibility.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Web Redesign Services
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                If your current website looks outdated or underperforms, we
                offer complete redesign services to revitalize it with modern
                aesthetics, enhanced functionality, and improved user
                experience.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Graphic Design for Web
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                We create visually engaging graphics for blogs, case studies, or
                promotional content to make your site stand out.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Custom Website Design
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                We create unique, fully customized websites that align with your
                brand’s goals, vision, and identity.
              </p>
            </div>
            <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow  ">
              <span>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Website Audit & Optimization
                </h5>
              </span>
              <p className="mb-3 font-normal text-gray-700 ">
                We audit your existing website for performance bottlenecks and
                optimize loading times, improving the overall user experience.
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
export default OfferSectionWebDesign;
