import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch('estate.json')
        .then(res => res.json())
        .then(data => setEstates(data))
    },[])
    return (
        <div className="pt-28 mx-5">
            <div className="flex items-center justify-between">
                <div>
                    <h5 className="text-[#FBA968] text-base font-medium outfit mb-5">WHY CHOOSE US</h5>
                    <h1 className="text-[#171717] anek text-[50px] font-semibold  leading-[56px]">Building an inclusive <br /> society together</h1>
                </div>
                <div>
                    <p className="text-[#6E6E78] text-[17px] font-medium mb-5">Get in touch with our medical team for any inquiries, appointments, <br /> or concerns. Our dedicated professionals are here to provide <br /> you with the assistance and support you need. Reach out today for expert guidance.</p>
                    <p className="text-[#171717] text-[14px] outfit font-semibold underline decoration-orange-400 decoration-2 hover:text-[orange]">CONTACT US</p>
                </div>
            </div>

            <div className="flex gap-8 mt-10">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;