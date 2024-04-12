import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
// import DraggableMarker from "../DraggableMarker/DraggableMarker";


const ContactUs = () => {
    return (
        <div>
            <div className="mx-20 flex justify-center relative">
                <img  className="w-[1300px] border h-[470px] rounded-[70px]" src="https://i.postimg.cc/CKdkjR1Q/resize-1712918627986206288banner.jpg" alt="#" />
                <div className="absolute top-40">
                    <h2 className="text-[#171717] text-[50px] font-semibold  anek">Contact Us</h2>
                    <p className="py-3 mx-2 rounded-xl font-semibold text-center bg-[#FFFFFF] text-[14px] outfit"><span className="mr-3 text-[#171717]">HOME</span> <span className="text-[14px] font-semibold text-[#171717]">-</span> <span className="text-[#FBA968] ml-5">CONTACT US</span></p>
                </div>
            </div>


            <div className="flex justify-center mt-36 gap-10">
                <div>
                    <p className="text-[#FBA968] outfit text-[14px] font-medium pb-4">CONTACT WITH US</p>
                    <h2 className="text-[50px] text-[#171717] font-semibold anek leading-[54px]">Contact <span>&#38;</span> hire us <br /> for NDIS Services!</h2>
                    <p className="text-[#6E6E78] text-[17px] outfit pt-4 pb-8">Connect with us for NDIS services designed specifically for <br /> you. Our expert care is tailored to meet your unique needs. <br /> Reach out today.</p>
                    <button className="text-[#171717] bg-[#FBA968] text-[14px] outfit py-4 px-9 font-medium rounded-full">ABOUT US</button>
                </div>
                <div className="bg-[#FFFFFF] rounded-t-3xl rounded-l-3xl pl-11 pr-20 pb-12 pt-7 ">
                    <div className="pb-6">
                        <h4 className="text-[27px] text-[#171717] outfit font-medium">Support</h4>
                        <p className="text-[#6E6E78] text-[17px] outfit ">From our expert team</p>
                    </div>
                    <hr />
                    <div className="pt-10">
                        <div className="flex items-center gap-5 mb-7">
                            <FiPhoneCall className="w-[45px] h-[43px] p-2 bg-[#F4F4F4] rounded-full text-[#FBA968]"/>
                            <span>
                                <p className="text-[20px] text-[#171717] outfit font-medium">Phone</p>
                                <p className="text-[#6E6E78] text-[17px] font-medium outfit">+12 (3) 456 0000</p>
                            </span>
                        </div>
                        <div className="flex items-center gap-5">
                            <TfiEmail className="w-[45px] h-[43px] p-2 rounded-full bg-[#F4F4F4] text-[#FBA968]"/>
                            <span>
                                <p className="text-[20px] text-[#171717] outfit font-medium">Email</p>
                                <p className="text-[#6E6E78] text-[17px] font-medium outfit">zaver123@gmail.com</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] rounded-t-3xl rounded-l-3xl pl-11 pr-20 pb-12 pt-7 ">
                    <div className="pb-6">
                        <h4 className="text-[27px] text-[#171717] outfit font-medium">Address</h4>
                        <p className="text-[#6E6E78] text-[17px] outfit ">To visiting our Office</p>
                    </div>
                    <hr />
                    <div className="pt-10">
                        <div className="flex items-center gap-5 mb-7">
                            <IoLocationOutline className="w-[45px] h-[43px] p-2 bg-[#F4F4F4] rounded-full text-[#FBA968]"/>
                            <span>
                                <p className="text-[20px] text-[#171717] outfit font-medium">Location</p>
                                <p className="text-[#6E6E78] text-[17px] font-medium outfit">A-1, Envanto HQ, Australia</p>
                            </span>
                        </div>
                        <div className="flex items-center gap-5">
                            <FaRegClock className="w-[45px] h-[43px] p-2 rounded-full bg-[#F4F4F4] text-[#FBA968]"/>
                            <span>
                                <p className="text-[20px] text-[#171717] outfit font-medium">Office Hour</p>
                                <p className="text-[#6E6E78] text-[17px] font-medium outfit">Mon - Sat: 9am to 6pm</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#171717] rounded-3xl mx-10 mt-36">
                <div className="flex justify-center gap-10 pt-24">
                    <div>
                        <p className="text-[#FBA968] text-[14px] outfit font-medium pb-4">FILL THE FORM</p>
                        <h2 className="text-[50px] anek text-[#FFFFFF] font-semibold leading-[55px]">Would you like to <br /> discuss a Service?</h2>
                        <p className="text-[#FFFFFF] text-[17px] outfit pt-7">Interested in our services? Lets chat! Whether you have questions, <br /> need advice, or want to explore options, our team is here to <br /> support you. Schedule a discussion today.</p>
                    </div>
                    <div>
                        <div className="flex gap-10 mb-5">
                            <input className="py-4 rounded-xl pl-4 pr-32 placeholder:text-[#FFFFFF] border-gray-500 border-[2px] placeholder:font-medium placeholder:outfit]" placeholder="Full Name" type="text" />
                            <input className="py-4 rounded-xl pl-4 pr-32 placeholder:text-[#FFFFFF] border-gray-500 border-[2px] placeholder:font-medium placeholder:outfit" placeholder="Email" type="email" />
                        </div>
                        <div className="flex gap-10 mb-5">
                            <input className="py-4 rounded-xl pl-4 pr-32 placeholder:text-[#FFFFFF] border-gray-500 border-[2px] placeholder:font-medium placeholder:outfit" placeholder="Phone Number" type="number" />
                            <input className="py-4 rounded-xl pl-4 pr-32 placeholder:text-[#FFFFFF] border-gray-500 border-[2px] placeholder:font-medium placeholder:outfit" placeholder="Website" type="text" />
                        </div>
                        <textarea name="" placeholder="Subject" className="placeholder:pl-4 placeholder:pt-2 placeholder:outfit placeholder:text-[#FFFFFF] placeholder:text-[16px] placeholder:font-medium rounded-2xl mb-5" id="" cols="92" rows="6"></textarea> <br />
                        <button className="bg-[#FBA968] text-[#171717] py-4 px-8 outfit text-[16px] font-medium rounded-full">SEND MESSAGE</button>
                    </div>
                </div>

                <div className="flex justify-center items-center bg-no-repeat">
                    <img src="https://i.postimg.cc/g0R6C4sv/contact-us-img.webp" alt="#" />
                    <div>
                        {/* <DraggableMarker></DraggableMarker> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;