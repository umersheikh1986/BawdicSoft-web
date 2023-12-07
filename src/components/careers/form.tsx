import { FC } from "react"
import { FaWhatsapp } from "react-icons/fa6";
interface formSectionProps {}

const FormSection :FC<formSectionProps> = () => {
return (<div className="pt-20 pb-20 md:px-0 px-10 ">
    <div>
        <p className="text-3xl lg:text-4xl font-extrabold text-center text-sky-900 leading-7 pb-12">Personal Information</p>

        <form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name *</label>
  </div>
  <div className="relative z-0 w-full mt-10 mb-5 group">
      <input type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email *</label>
  </div>
  <div className="relative z-0 w-full mt-10 mb-5 group">
      <input type="number" name="phone" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone *</label>
  </div>
{/* DropDown */}


  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-500  mt-8">Department *</label>
  <select id="countries" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300    focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2">
    <option className="hover:bg-sky-900 p-5">Your Interest</option>
    <option className="hover:bg-sky-900 p-5">Developer</option>
    <option className="hover:bg-sky-900 p-5">Sales</option>
  </select>






  <div className="relative z-0 w-full mt-10 mb-5 group">
      <input type="url" name="portFolioLink" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer hover:border-sky-900 border-b-2" placeholder=" " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gray-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PortFolio Link (Optional) *</label>
  </div>


  <label className="block mb-2 text-sm  text-gray-900  pt-5" htmlFor="user_avatar">Upload file</label>
  {/* <input className="block  w-full text-sm text-gray-900 border:none  rounded-lg cursor-pointer " aria-describedby="user_avatar_help" id="user_avatar" type="file" /> */}
  <input
    type="file"
    className="block w-full text-sm 
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-sky-950 file:text-white
        hover:file:bg-sky-700"
  />
  
  <button type="submit" className="block py-2.5 px-0 w-full text-sm bg-sky-950 hover:bg-sky-700  text-white   font-semibold rounded-[12px]  mt-10">Share Your Profile</button>
</form>

    </div>

</div>)
}
export default FormSection;