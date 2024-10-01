import { FC } from "react";
interface WhyUsSectionProps {}
const WhyUsSectionFullStack: FC<WhyUsSectionProps> = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-10 md:pt-16 pb-20 md:pb-32 max-w-7xl">
        <p className="text-2xl md:text-4xl font-bold text-center">Why Us</p>
        <div className="flex justify-center items-center">
          <p className="text-md text-gray-600 max-w-6xl font-semibold text-center px-5  leading-7 pb-5 pt-5">
            We custom-build full Stack Websites by analysing your needs with
            market trends and advising you on the right structuring and
            techniques to be used.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-24  gap-4 ">
          <div className="border-2 hover:border-sky-800    p-6 bg-white  border-gray-200 rounded-lg shadow ">
            <span>
              <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 ">
                Tailored Solutions
              </h5>
            </span>
            <p className="mb-3 font-normal text-gray-700 ">
              We deliver customized strategies and solutions that align with
              your unique business goals and audience.
            </p>
          </div>
          <div className="border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow ">
            <span>
              <h5 className="mb-2 text-lg md:text-2xl  font-bold tracking-tight text-gray-900 ">
                Expert Team
              </h5>
            </span>
            <p className="mb-3 font-normal text-gray-700 ">
              Our team consists of highly skilled professionals with experience
              in web development, design, digital marketing, and more.
            </p>
          </div>
          <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow ">
            <span>
              <h5 className="mb-2 text-lg md:text-2xl  font-bold tracking-tight text-gray-900 ">
                Innovative Approach
              </h5>
            </span>
            <p className="mb-3 font-normal text-gray-700 ">
              We stay ahead of the curve by implementing the latest technologies
              and best practices to provide cutting-edge solutions.
            </p>
          </div>
          <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow ">
            <span>
              <h5 className="mb-2 text-lg md:text-2xl  font-bold tracking-tight text-gray-900 ">
                Scalable and Responsive Solutions
              </h5>
            </span>
            <p className="mb-3 font-normal text-gray-700 ">
              Our designs and applications are built to scale with your business
              while ensuring a seamless experience across all devices.
            </p>
          </div>
          <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow ">
            <span>
              <h5 className="mb-2 text-lg md:text-2xl  font-bold tracking-tight text-gray-900 ">
                Customization
              </h5>
            </span>
            <p className="mb-3 font-normal text-gray-700 ">
              Our design is completely customisable so you can choose to change
              any feature at any point in time and we will do it for you. You
              can start with providing free service and later start charging
              when appropriate and we can easily customise it..
            </p>
          </div>
          <div className=" border-2 hover:border-sky-800   p-6 bg-white  border-gray-200 rounded-lg shadow ">
            <span>
              <h5 className="mb-2 text-lg md:text-2xl  font-bold tracking-tight text-gray-900 ">
                Mobility
              </h5>
            </span>
            <p className="mb-3 font-normal text-gray-700 ">
              Users can access your platform on any device from anywhere in the
              world so your forum is completely mobile and easy to access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyUsSectionFullStack;
