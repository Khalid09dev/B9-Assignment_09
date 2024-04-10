import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex justify-around items-center relative py-8 z-10">
            <img className="h-[36px] w-[150px]" src="https://i.postimg.cc/bwpCmJFp/logo.png" alt="Logo" />
            <div>
                <ul className="flex items-center gap-11 text-[#171717] text-[17px] font-medium leading-3">
                    <li className="text-[#FBA968]"><NavLink to="/">HOME</NavLink></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">PAGES</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">SERVICES</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">PROJECT</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">BLOG</a></li>
                    <li className="hover:text-[#FBA968] duration-150"><a href="#">CONTACT US</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <button className="text-[#171717] text-base py-4 px-7 bg-[#FFFFFF] font-medium rounded-full hover:bg-[#171717] hover:text-white hover:duration-500">APPOINTMENT</button>
                <div className="">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="absolute mt-1 inline-block">
                        <img className="w-14 h-14 rounded-full " alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;