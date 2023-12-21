import Image from "next/image";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa6";
interface formSectionProps { }

const FormSection: FC<formSectionProps> = () => {
  const optionList = [
{id:1, title:"MERN Stack Developer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
{id:2, title:"MEAN Stack Developer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
{id:3, title:"Full Stack Developer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
{id:4, title:"Generative(AI) Developer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
{id:5, title:"Phyton Developer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
{id:6, title:"UI/UX Designer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
{id:7, title:"Block Chain Developer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
{id:8, title:"WordPress Developer", desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."},
  ]
  return (
    <div className=" flex justify-center items-center bg-gradient-to-r from-sky-950   via-sky-700 via-30% to-sky-600 to-70% ">

      {/* <p className=" text-2xl  md:text-3xl lg:text-4xl font-extrabold text-center text-sky-900 leading-7 ">
          Personal Information
        </p> */}

      {/* <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent   border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name *
            </label>
          </div>
          <div className="relative z-0 w-full mt-10 mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent   border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email *
            </label>
          </div>
          <div className="relative z-0 w-full mt-10 mb-5 group">
            <input
              type="number"
              name="phone"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent   border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone *
            </label>
          </div>

          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-500  mt-8"
          >
            Department *
          </label>
          <select
            id="countries"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-gray-300    focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2"
          >your Interest
            <option className="hover:bg-sky-900 p-5">Developer</option>
            <option className="hover:bg-sky-900 p-5">Sales</option>
          </select>

          <div className="relative z-0 w-full mt-10 mb-5 group">
            <input
              type="url"
              name="portFolioLink"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent   border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              PortFolio Link (Optional) *
            </label>
          </div>

      
          <input
            type="file"
            className="block w-full text-sm 
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-sky-950 file:text-white pt-5
        hover:file:bg-sky-700"
          />

          <button
            type="submit"
            className="block py-2.5 px-0 w-full text-sm bg-sky-950 hover:bg-sky-700  text-white   font-semibold rounded-[12px]  mt-10"
          >
            Share Your Profile
          </button>
        </form>  */}


      {/* container-1 */}
      {/* <div className="flex flex-col justify-center items-center">
          <p className="text-center text-gray-700 pb-5 font-bold text-2xl md:text-3xl  ">CONNECT TO BAWDICSOFT FOR JOB</p>
          <p className="text-md text-gray-700">Come to our Company Change Your Future and gain your skills for a long time as soon as possible</p>
          </div> */}
      {/* container-2 */}
      {/* <div className="flex justify-center items-center pt-5 md:pt-16">
<div className="grid grid-cols-1 md:grid-cols-2 place-items-center  max-w-7xl px-5 md:px-8  lg:px-20   ">
  <div>
  <h3 className="text-2xl font-semibold text-gray-700 pb-4">See opportunities matching your future goals & plans</h3>
  <p className="text-gray-500">Set your results to match the Future Goals & Plans section on your profile. All opportunities will instantly align to your current career interests and location preferences. Simply update your Tallo profile to match your latest goals.</p>
  </div>
  <Image src={"/images/careers/phyton.jpg"} alt="" width={400} height={400} className="h-80 md:w-[500px] md:h-[350px] rounded-md"></Image>
</div>

</div> */}
      {/* container-3 */}
      {/* <div className="flex justify-center items-center pt-5 md:pt-32">
<div className="grid grid-cols-1 md:grid-cols-2 place-items-center  max-w-7xl px-5 md:px-8  lg:px-20   ">
  <Image src={"/images/careers/webdeveloper.jpg"} alt="" width={400} height={400} className=" w-[250px] h-[200px] md:w-[500px] md:h-[350px] rounded-md"></Image>
  <div>
  <h3 className="text-2xl font-semibold text-gray-700 pb-4">Know which opportunities are a great fit</h3>
  <p className="text-gray-500">BawdicSoft shares which opportunities are a great fit for you based on best-match search criteria.</p>
  </div>
</div>

</div> */}




      {/* New Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-7xl gap-5 px-5 md:px-10 py-10 ">
        <div className="bg-white flex flex-col lg:col-span-2 items-center px-2 md:px-5 pb-16 rounded-3xl">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center pt-10 pb-4">Join Our Team</h2>
          <p className=" text-sm  md:text-lg text-center md:px-10">Grow professionally with a team of sharp-witted geeks with tons of experience & added benefits</p>
          <form className="px-5 pt-8">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2 md:gap-4">
                <div className="relative w-full  h-10 md:h-12">
                  <input
                    className=" w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50   placeholder-shown:border-blue-gray-200   border  border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  border-sky-700"
                    placeholder=" " /><label
                      className="flex w-full h-full  pointer-events-none absolute left-0 font-normal  transition-all -top-1.5  text-sm    before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1  before:rounded-tl-md before:border-t  before:border-l before:pointer-events-none before:transition-all  after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md  after:border-t   after:border-r after:pointer-events-none     text-sky-700 before:border-sky-700  after:border-sky-700">
                    First Name
                  </label>
                </div>

                <div className="relative w-full  h-10 md:h-12">
                  <input
                    className=" w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50   placeholder-shown:border-blue-gray-200   border  border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  border-sky-700"
                    placeholder=" " /><label
                      className="flex w-full h-full  pointer-events-none absolute left-0 font-normal  transition-all -top-1.5  text-sm    before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1  before:rounded-tl-md before:border-t  before:border-l before:pointer-events-none before:transition-all  after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md  after:border-t   after:border-r after:pointer-events-none    text-sky-700 before:border-sky-700  after:border-sky-700">
                    Last Name
                  </label>
                </div>
              </div>
              <div className="relative w-full  h-10 md:h-12">
                <input
                  className=" w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50   placeholder-shown:border-blue-gray-200   border  border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  border-sky-700"
                  placeholder=" " /><label
                    className="flex w-full h-full  pointer-events-none absolute left-0 font-normal  transition-all -top-1.5  text-sm    before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1  before:rounded-tl-md before:border-t  before:border-l before:pointer-events-none before:transition-all  after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md  after:border-t   after:border-r after:pointer-events-none    text-sky-700 before:border-sky-700  after:border-sky-700">
                  Email
                </label>
              </div>
              <div className="relative w-full  h-10 md:h-12">
                <input
                  className=" w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50   placeholder-shown:border-blue-gray-200   border  border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  border-sky-700"
                  placeholder=" " /><label
                    className="flex w-full h-full  pointer-events-none absolute left-0 font-normal  transition-all -top-1.5  text-sm    before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1  before:rounded-tl-md before:border-t  before:border-l before:pointer-events-none before:transition-all t after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md  after:border-t   after:border-r after:pointer-events-none    text-sky-700  before:border-sky-700  after:border-sky-700">
                  Phone Number
                </label>
              </div>
              <div className="relative w-full  h-10 md:h-12">
                <select
                  className=" w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50   placeholder-shown:border-blue-gray-200   border  border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  border-sky-700"
                  placeholder=" ">
                  <option className="hover:bg-sky-900 p-5">Developer</option>
                  <option className="hover:bg-sky-900 p-5">Sales</option>
                </select><label
                  className="flex w-full h-full  pointer-events-none absolute left-0 font-normal  transition-all -top-1.5  text-sm    before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1  before:rounded-tl-md before:border-t  before:border-l before:pointer-events-none before:transition-all t after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md  after:border-t   after:border-r after:pointer-events-none    text-sky-700  before:border-sky-700  after:border-sky-700">
                  Your Interest
                </label>
              </div>
              <div className="relative w-full  h-10 md:h-12">
                <input
                  type="url"
                  className=" w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50   placeholder-shown:border-blue-gray-200   border  border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  border-sky-700"
                  placeholder=" " /><label
                    className="flex w-full h-full  pointer-events-none absolute left-0 font-normal  transition-all -top-1.5  text-sm    before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1  before:rounded-tl-md before:border-t  before:border-l before:pointer-events-none before:transition-all t after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md  after:border-t   after:border-r after:pointer-events-none    text-sky-700  before:border-sky-700  after:border-sky-700">
                  PortFolio Link (Optional)
                </label>
              </div>

              <input
                type="file"
                className="block w-full text-sm 
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-sky-950 file:text-white pt-5
        hover:file:bg-sky-700"
              />
            </div>

            <button
              type="submit"
              className="block py-3.5 px-0 w-full text-sm bg-sky-950 hover:bg-sky-700  text-white   font-semibold rounded-[12px]  mt-10"
            >
              Share Your Profile
            </button>
          </form>
        </div>
        <div className="flex flex-col bg-white p-8 rounded-3xl">
          <div>
            <h2 className="text-sky-800 font-semibold text-center text-2xl pb-4 ">Welcome to Bawdicsoft </h2>
          </div>
        <div className="flex flex-col gap-5 overflow-y-auto bg-transparent p-0 md:p-5 h-screen  rounded-3xl">

          {optionList.map((opt)=>{
            return  <div key={opt.id} className="p-5  bg-gradient-to-r from-sky-900   via-sky-700 via-30% to-sky-700 to-70% rounded-3xl text-white" >
            <p className="text-lg font-semibold ">{opt.title}</p>
            <p className="text-md text-gray-100">{opt.desc}</p>
           </div>
          })}
      
       
        </div>
        </div>
      </div>
    </div>
  );
};
export default FormSection;
