import Navbar from "../Navbar/Navbar";
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;