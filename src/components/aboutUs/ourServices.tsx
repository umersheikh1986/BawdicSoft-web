import Image from "next/image";
import img1 from "../../../public/images/aboutImages/2637112_370799-PBNAS5-71.webp";
import img2 from "../../../public/images/aboutImages/435247898.webp";
import img3 from "../../../public/images/aboutImages/56jhryur6.webp";
import img4 from "../../../public/images/aboutImages/coins-paper-money-globe-white-statistic-form-background.webp";
import img5 from "../../../public/images/aboutImages/gdf345345.webp";
import img6 from "../../../public/images/aboutImages/website-development-links-seo-webinar-cyberspace-concept.webp";
import React, { FC, ReactNode, MouseEvent } from "react";

interface ourSevicesProps {}

const OurSevices: FC<ourSevicesProps> = () => {
  return (
    // <div className="bg-sky-900 flex justify-center">
    //   <div className=" py-20 px-16 sm:px-16  max-w-7xl">
    //     <p className="text-white font-extrabold  text-2xl md:text-4xl text-center">
    //       Our Services
    //     </p>

    //     <div className="bg-sky-900 py-20 ">
    //       <div className="flex pt-5 justify-center sm:px-16  flex-wrap gap-32">
    //         <div className="flex flex-col justify-center items-center gap-5">
    //           <Image
    //             src={img6}
    //             alt=""
    //             width={200}
    //             height={200}
    //             className="md:w-24 md:h-24 h-32 w-32 rounded-full"
    //           />
    //           <p className="text-white font-bold text-lg text-center">
    //             Web Application
    //           </p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-5">
    //           <Image
    //             src={img1}
    //             alt=""
    //             width={200}
    //             height={200}
    //             className="md:w-24 md:h-24 h-32 w-32 rounded-full"
    //           />
    //           <p className="text-white font-bold text-lg  text-center">
    //             Blockchain
    //           </p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-5">
    //           <Image
    //             src={img3}
    //             alt=""
    //             width={200}
    //             height={200}
    //             className="md:w-24 md:h-24 h-32 w-32 rounded-full"
    //           />
    //           <p className="text-white font-bold text-lg text-center ">
    //             Token development
    //           </p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-5">
    //           <Image
    //             src={img5}
    //             alt=""
    //             width={200}
    //             height={200}
    //             className="md:w-24 md:h-24 h-32 w-32 rounded-full"
    //           />
    //           <p className="text-white font-bold text-lg text-center">DeFi</p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-5">
    //           <Image
    //             src={img2}
    //             alt=""
    //             width={200}
    //             height={200}
    //             className="md:w-24 md:h-24 h-32 w-32 rounded-full"
    //           />
    //           <p className="text-white font-bold text-lg text-center">
    //             NFT Marketplace
    //           </p>
    //         </div>
    //         <div className="flex flex-col justify-center items-center gap-5">
    //           <Image
    //             src={img4}
    //             width={200}
    //             height={200}
    //             alt=""
    //             className="md:w-24 md:h-24 h-32 w-32 rounded-full"
    //           />
    //           <p className="text-white font-bold text-lg text-center">
    //             Currency Exchange
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>

  
    <section className="relative flex justify-center mb-20 pb-72 flex-col items-center mt-16 py-24  bg-gradient-to-r from-sky-950   via-sky-700 via-30% to-sky-600 to-70%
     bg-blend-multiply" >
 <h4 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">Get in Touch With Us.</h4>
 <p className="text-white text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quisquam, voluptate nam doloribus dignissimos quae.</p>
 <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-5 pt-5 md:pt-10">
  <div className="p-8 flex rounded-lg bg-white">
  <div className="bg-green-800 p-5 rounded-full">
  <svg className="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
      <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"/>
    </g>
  </svg>
    </div>
    <div>
    <h2 className="text-green font-bold text-3xl ">Head Office</h2>
    <p className="text-gray-700">Farazan Building karachi, Pakistan</p>
    </div>
  </div>
  <div className="p-8 flex rounded-lg bg-white">
  <div className="bg-green-800 p-5 rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
    </div>
    <div>
    <h2 className="text-green font-bold text-3xl ">Call Us</h2>
    <p className="text-gray-700">Farazan Building karachi, Pakistan</p>
    </div>
  </div>
  <div className="p-8 flex rounded-lg bg-white">
  <div className="bg-green-800 p-5 rounded-full">
  <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
  </svg>
    </div>
    <div>
    <h2 className="text-green font-bold text-3xl ">Email Us</h2>
    <p className="text-gray-700">Farazan Building karachi, Pakistan</p>
    </div>
  </div>
 </div>
    {/* sign up form */}
    <div className="absolute -bottom-8 shadow-lg flex bg-white max-w-7xl  rounded-lg  py-10 flex-col px-8 justify-center gap-2 items-center">
   <h4 className="text-4xl font-semibold">Sing Up for Our Newsletter.</h4>
   <p className="text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quas!</p>
   <form>
    <input  type="email" className="bg-green-200 p-2 py-4" placeholder="Email"/>
    <button type="submit" className="bg-sky-950 px-16 py-4 text-white font-semibold ml-5">subscribe</button>
   </form>
    </div>
    </section>

    </div>
  );
};
export default OurSevices;

// const OurSevices: FC<ourSevicesProps> = () => {
//   return (

//     <div className='bg-sky-900 py-20  px-64 lg:px-64'>
//         <p className='text-white font-extrabold  text-3xl md:text-4xl text-center'>Our Services</p>

//     <div className='flex justify-center flex-wrap gap-32 pt-12'>
//         <div className='flex flex-col justify-center text-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/website-development-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
//             <p  className='text-white font-bold text-xl '>Web Application</p>
//         </div>
//         <div className='flex flex-col justify-center  text-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/2637112_370799-PBNAS5-71.webp" alt='' width={30} height={30} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
//             <p  className='text-white font-bold text-xl '>Blockchain</p>
//         </div>
//         <div className='flex flex-col justify-center text-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/56jhryur6.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
//             <p  className='text-white font-bold text-xl'>Token development</p>
//         </div>
//         <div className='flex flex-col justify-center text-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/gdf345345-1536x1536.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
//             <p  className='text-white font-bold text-xl'>DeFi</p>
//         </div>
//         <div className='flex flex-col justify-center text-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/435247898-1536x1536.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
//             <p  className='text-white font-bold text-xl '>NFT Marketplace</p>
//         </div>
//         <div className='flex flex-col justify-center text-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/coins-paper-money-globe-white-statistic-form-background.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-40 w-40 rounded-full'/>
//             <p  className='text-white font-bold text-xl '>Currency Exchange</p>

//     <div className='bg-sky-900 py-20 px:20 md:px-40'>
//         <p className='text-white font-extrabold text-2xl md:text-4xl text-center pb-10'>Our Services</p>

//     <div className='flex pt-5 justify-center sm:px-16 md:px-32 flex-wrap gap-32'>
//         <div className='flex flex-col justify-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/website-development-links-seo-webinar-cyberspace-concept.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
//             <p  className='text-white font-bold text-lg text-center'>Web Application</p>
//         </div>
//         <div className='flex flex-col justify-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/2637112_370799-PBNAS5-71.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
//             <p  className='text-white font-bold text-lg  text-center'>Blockchain</p>
//         </div>
//         <div className='flex flex-col justify-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/56jhryur6.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
//             <p  className='text-white font-bold text-lg text-center '>Token development</p>
//         </div>
//         <div className='flex flex-col justify-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/gdf345345-1024x1024.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
//             <p  className='text-white font-bold text-lg text-center'>DeFi</p>
//         </div>
//         <div className='flex flex-col justify-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/435247898-1024x1024.webp" alt='' width={20} height={20} className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
//             <p  className='text-white font-bold text-lg text-center'>NFT Marketplace</p>
//         </div>
//         <div className='flex flex-col justify-center items-center gap-5'>
//             <Image src="https://bawdicsoft.com/wp-content/uploads/2022/08/coins-paper-money-globe-white-statistic-form-background.webp" width={20} height={20} alt='' className='md:w-24 md:h-24 h-32 w-32 rounded-full'/>
//             <p  className='text-white font-bold text-lg text-center'>Currency Exchange</p>
//         </div>

//     </div>

//     </div>
//   );
// }

// export default OurSevices;
