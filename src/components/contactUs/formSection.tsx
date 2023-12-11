"use client"
import nodemailer from "nodemailer"
import { FC, useRef, useState } from "react"
import { FaWhatsapp } from "react-icons/fa6";
import axiosLib from "./link";
import Modal from "../modal/modal";
interface formSectionProps { }

const FormSection: FC<formSectionProps> = () => {
    const [responseData, setResponseData] = useState("");
    const [badResponse, setbadResponse] = useState("");

  
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)
    const filRef = useRef<HTMLInputElement | null>(null)
    const submitHandler = (event: any) => {
        event?.preventDefault();
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const phoneNo = phoneRef.current?.value;
        const message = messageRef.current?.value;
        const file = filRef.current?.files ? filRef.current.files : null;
        axiosLib.post("/api/user", {
            name, email, phoneNo, message, file
        }).then(res => setResponseData(res.data.message)).catch(err => setbadResponse(err))
    }

    return (
        <>
            <div className="flex justify-center items-center">
                {/*  */}
                {responseData &&
                <Modal result = {responseData}/>
            }


                {/*Bad reponse  */}
                {badResponse &&
                <Modal result = {badResponse}/>
            }

                <div className=" grid grid-cols-1 md:gap-32 md:grid-cols-2 pt-20 pb-20  px-10 ">
                    <div>
                        <p className="text-3xl text-center font-extrabold text-sky-900 leading-7 pb-4">Message Us</p>
                        <form className="" onSubmit={submitHandler}>
                            <div className="relative z-0  mb-5 group">
                                <input type="text" ref={nameRef} name="name" id="floating_email" className="block hover:border-blue-500 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Name" required />
                            </div>
                            <div className="relative z-0 mb-5 group">
                                <input type="email" ref={emailRef} name="email" id="floating_email" className="block hover:border-blue-500 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Email" required />
                            </div>
                            <div className="relative z-0  mb-5 group">
                                <input type="number" ref={phoneRef} name="phoneNumber" id="floating_email" className="block hover:border-blue-500 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone" required />
                            </div>

                            <textarea id="message" ref={messageRef} name="message" rows={4} className="block  hover:border-blue-500  border-2 peer p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500    " placeholder="Enter Your Message..."></textarea>

                            {/* <input ref={filRef} className="block text-sm text-gray-900 border:none  rounded-lg cursor-pointer " aria-describedby="user_avatar_help" id="user_avatar" type="file" /> */}
                            <input
                                type="file"
                                className="block w-full text-sm 
        file:mr-4 file:py-2 file:px-4 file:rounded-md
        file:border-0 file:text-sm file:font-semibold
        file:bg-sky-950 file:text-white pt-5
        hover:file:bg-sky-700"
                            />
                            <button type="submit" className="block py-2.5 px-16 text-sm bg-sky-950  text-white   font-semibold rounded-[12px] mt-8  hover:bg-sky-700">Send Message</button>
                        </form>
                    </div>


                    <div className="flex   pt-16 md:pt-0 flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <p className="font-black text-[20px] leading-5 text-sky-900">Email:</p>
                            <p className="text-gray-700 text-lg leading-4">info@bawdicsoft.com</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-black text-[20px] leading-5 text-sky-900">Phone:</p>
                            <p className="text-gray-700 text-lg ">+1(203)-902-1401</p>
                            <a href="https://wa.me/+923178866631" target="_blank" className="bg-sky-950 py-2 hover:bg-sky-700  rounded-[8px] flex justify-center gap-2 md:gap-4 w-[180px] md:w-[220px] items-center"><FaWhatsapp className="text-white font-bold  text-[20px] md:text-[30px] " /><span className="text-white font-bold text-16px md:text-[18px]">For Whatsapp</span></a>
                        </div>

                    </div>

                </div>
            </div>
           
        </>
    )
}
export default FormSection;