import { MdOutlineDoubleArrow } from "react-icons/md";

const AboutUs = () => {
    return (
        <div className="mt-28 flex justify-center gap-8">
            <div>
            <h5 className="text-[#FBA968] text-base font-medium outfit mb-5">ABOUT US</h5>
            <h1 className="text-[#171717] anek text-[50px] font-semibold  leading-[56px]">National Disability <br /> Insurance Scheme (NDIS)</h1>
            <p className="text-[17px] text-[#6E6E78] font-medium outfit pb-9 pt-3">The National Disability Insurance Scheme (NDIS) is an Australian government <br /> initiative providing financial support and services to people with <br />disabilities, aiming for improved quality of life and <br /> greater independence</p>
            <ul className="mb-9">
                <li className="flex items-center text-[#6E6E78] text-[18px] font-medium"><MdOutlineDoubleArrow className="text-[orange] text-3xl"/> Australian program providing support and services for people with disabilities.</li>
                <li className="flex items-center text-[#6E6E78] text-[18px] font-medium"><MdOutlineDoubleArrow className="text-[orange] text-3xl"/> Individualized funding for disability-related needs and services.</li>
                <li className="flex items-center text-[#6E6E78] text-[18px] font-medium"><MdOutlineDoubleArrow className="text-[orange] text-3xl"/> Aims for greater independence, inclusion, and community participation.</li>
                <li className="flex items-center text-[#6E6E78] text-[18px] font-medium"><MdOutlineDoubleArrow className="text-[orange] text-3xl"/> Implemented to improve access to necessary disability supports nationwide.</li>
            </ul>
            <button className="text-white bg-[#171717] py-4 px-9 rounded-full text-[14px] outfit font-medium hover:bg-[#FBA968] duration-200">MORE ABOUT US</button>
            </div>
            <img className="w-[660px] h-[575px] rounded-3xl" src="https://i.postimg.cc/tgxRRkTj/take-care-nurse.jpg" alt="#" />
        </div>
    );
};

export default AboutUs;