// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from "../../firebase/firebase.init";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import { AuthContext } from "../../providers/AuthProvider";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        //password validation
        if(!/(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            toast.error('Your password have one Uppercase and Lowercase letter and length have to be (min) six digit.', {autoClose: 5000});
            return;
        }
        

        // user create
        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            toast.success('Registration Successfull', {autoClose: 5000});
            navigate('/register');
        })
        .catch((error) => {
            toast.warn(error.message, {autoClose: 5000});
        })
    }

    //password show and hiden
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
        <div className="flex max-h-screen justify-center items-center text-center">
            <Helmet>
                <title>Zavar - Registration Page</title>
            </Helmet>
            <div className="hero min-h-screen bg-gray-100">
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-[#171717]">Register now!</h1>
                    <p className="py-6 text-[#171717] font-medium text-[20px]">Register for access your medical records and services securely.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegisterForm} className="card-body bg-[#FFFFFF] rounded-t-[14px] border-white">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] font-medium text-[#171717]">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] font-medium text-[#171717]">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[20px] text-[#171717] font-medium">Photo URL</span>
                    </label>
                    <input type="url" placeholder="Photo URL" name="photoURL" className="input input-bordered bg-gray-100 placeholder:text-[16px] outfit" />
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
                    <button className="btn btn-primary text-[20px] text-[#FFFFFF]">Register</button>
                    <ToastContainer></ToastContainer>
                    </div>
                </form>
                <h1 className="bg-[#FFFFFF] pb-2 text-[#171717] outfit text-[19px] rounded-b-[14px] select-none">Already have registered, go <Link className="text-blue-400 underline decoration-[2px]" to="/login">Login</Link></h1>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;