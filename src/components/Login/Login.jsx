import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {  signInWithEmailAndPassword  } from "firebase/auth";
import auth from '../../firebase/firebase.init'
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //password validation
        if(!/(?=.*[a-z])(?=.*[A-Z]).{6}$/.test(password)) {
            toast.error('Your password have one Uppercase and Lowercase letter and length have to be (min) six digit.', {autoClose: 5000});
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user);
            toast.success('Login Successfull');
        })
        .catch((error) => {
            toast.error(error.message);
        })
    }

    // password show and hide 
    const [toggle, setToggle] = useState(false);
    const passShowHide = () => {
        setToggle(!toggle);

        if(!toggle) {
            document.getElementById('eyeClose').classList.add('hidden');
            document.getElementById('eyeOpen').classList.remove('hidden');
        }
        else {
            document.getElementById('eyeOpen').classList.add('hidden');
            document.getElementById('eyeClose').classList.remove('hidden');
        }

    }
    return (
        <div className="flex max-h-screen justify-center items-center text-center ">
            <div className="hero min-h-screen bg-gray-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLoginForm} className="card-body bg-[#FFFFFF] rounded-t-[14px] border-white">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] font-medium text-[#171717]">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                        <span className="label-text text-[20px] text-[#171717] font-medium">Password</span>
                    </label>
                    <input type={toggle ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit"  required />
                    <span onClick={() => passShowHide()} className="absolute top-[50px] left-72">
                    <FaRegEyeSlash id="eyeClose" className="text-xl"/>
                    <FaRegEye id="eyeOpen" className="hidden text-xl"/>
                    </span>
                    </div>
                    <div className="form-control mt-4">
                    <button className="btn btn-primary text-[20px] text-[#FFFFFF]">Login</button>
                    </div>
                </form>
                <p className="bg-[#FFFFFF] text-[20px] text-[#171717] outfit font-medium select-none">Or</p>
                <div className="flex justify-center gap-3 pb-2 bg-white text-[#171717] outfit font-medium select-none">
                    <div className="flex items-center bg-[#FFFFFF]">
                        <div className="bg-gray-300 gap-1 p-2 flex items-center rounded-lg"><FaGoogle />Sign In With Google</div>
                    </div>
                    <div className="flex items-center bg-[#FFFFFF]">
                        <div className="bg-gray-300 flex p-2 gap-1 items-center rounded-lg"><FaGithub />Sign In With Github</div>
                    </div>
                </div>
                <h1 className="bg-[#FFFFFF] pb-2 text-[#171717] outfit text-[19px] rounded-b-[14px] select-none">If you new here, go <Link className="text-blue-400 underline decoration-[2px]" to="/register">Register</Link></h1>
                </div>
                <ToastContainer></ToastContainer>
                <div className="text-center lg:text-left select-none">
                <h1 className="text-5xl font-bold text-[#171717]">Login now!</h1>
                <p className="py-6 text-[#171717] font-medium text-[20px]">Access your medical records and services securely.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;