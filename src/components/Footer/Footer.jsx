import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mx-6 pb-5 mt-24">
            <footer className="bg-[#171717] rounded-[35px]">
                <div className="flex justify-around gap-36 pt-20">
                    <div>
                        <img className="h-[36px] w-[150px] text-white mb-7" src="https://i.postimg.cc/XJRcgNCT/footer-logo.png" alt="#" />
                        <p className="text-[#A7A7A7] text-[17px] outfit font-medium pb-5">Quick access to contact info, terms, privacy policy, <br /> and social links for our medical website</p>
                    </div>
                    <div>
                        <h4 className="text-[26px] anek font-medium text-[#FFFFFF]">Our Newsletter</h4>
                        <div className="relative">
                            <input className="py-4 pr-[10px] pl-4 w-[601px] bg-[#171717]  border-[#A7A7A7] border-[1px] rounded-full placeholder:text-[#A7A7A7] placeholder:font-medium placeholder:text-[18px]" type="email" placeholder="Enter you email..." required/>
                            <FaTelegram className="absolute left-[550px] bottom-2.5 w-[41px] h-[41px] duration-150 text-[#FBA968] hover:text-white"/>
                        </div>
                    </div>
                </div>

            <div className="flex justify-around pt-20">
            <ul className="text-[17px] outfit text-[#A7A7A7] font-medium">
                <li className="text-[#FFFFFF] text-[26px] anek mb-4 font-semibold">Useful Link</li>
                    <li className="pb-4">Home</li>
                    <li className="pb-4">Blog Classic</li>
                    <li className="pb-4">About Us</li>
                    <li className="pb-4">Blog Grid</li>
                    <li className="pb-4">Out Team</li>
                </ul>

                <ul className="text-[17px] outfit text-[#A7A7A7] font-medium">
                    <li className="text-[#FFFFFF] text-[26px] anek mb-4 font-semibold">Services</li>
                    <li className="pb-4">NDIS Support</li>
                    <li className="pb-4">Disablility Services</li>
                    <li className="pb-4">Therapists Support</li>
                    <li className="pb-4">In Home Support</li>
                    <li className="pb-4">Senior Care</li>
                </ul>

                <ul className="text-[17px] outfit text-[#A7A7A7] font-medium">
                    <li className="text-[#FFFFFF] text-[26px] anek mb-4 font-semibold">Company</li>
                    <li className="pb-4">Help Center</li>
                    <li className="pb-4">Treats Trogram</li>
                    <li className="pb-4">Carrers</li>
                    <li className="pb-4">Charities</li>
                    <li className="pb-4">Privacy</li>
                    <li className="pb-4">Request Appoinment</li>
                </ul>
                <div>
                    <div className="flex gap-5">
                        <FaLocationDot className="text-3xl w-14 h-14 p-4 rounded-full bg-[#E1E1E11A]"/>
                        <div className="text-[17px] outfit text-[#A7A7A7] font-medium pb-9">
                            <h4 className="text-[#FFFFFF] text-[26px] anek font-semibold">Address</h4>
                            <p>280 Granite Run Drive Suite Hobert, LA 90010,United States.</p>
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <FiPhoneCall className="text-3xl bg-[#E1E1E11A] w-14 h-14 p-4 rounded-full"/>
                        <div className="text-[17px] outfit text-[#A7A7A7] font-medium">
                            <h4 className="text-[#FFFFFF] text-[26px] anek font-semibold">Contact info</h4>
                            <p>(0) 123456789</p>
                            <p>mail@zaver.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between mx-16 mt-10 pb-5">
                <div className="flex gap-3">
                    <FaFacebookF className="w-[35px] h-[35px] text-black rounded-full p-2 bg-[#FFFFFF]"/>
                    <FaTwitter className="w-[35px] h-[35px] text-black rounded-full p-2 bg-[#FFFFFF]"/>
                    <FaLinkedinIn className="w-[35px] h-[35px] text-black rounded-full p-2 bg-[#FFFFFF]"/>
                </div>
                <p className="text-[#FFFFFF80] text-[17px] outfit">Copyright By Zaver. All Rights Reserved</p>
            </div>
            </footer>
        </div>
    );
};

export default Footer;