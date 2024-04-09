
const Navbar = () => {
    return (
        <div className="flex justify-around items-center py-8">
            <img className="h-[36px] w-[150px] " src="https://i.postimg.cc/bwpCmJFp/logo.png" alt="Logo" />
            <div>
                <ul className="flex items-center gap-11 text-[#171717] text-[17px] font-medium leading-3">
                    <li className="text-[#FBA968]"><a href="#">HOME</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">PAGES</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">SERVICES</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">PROJECT</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">BLOG</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">CONTACT US</a></li>
                </ul>
            </div>
            <div className="flex gap-3">
                <button className="text-[#171717] text-base py-4 px-7 bg-[#FFFFFF] font-medium rounded-full hover:bg-[#171717] hover:text-white hover:duration-500">APPOINTMENT</button>
                <div className="w-14 h-14 bg-[#FFFFFF] rounded-full"></div>
            </div>
        </div>
    );
};

export default Navbar;