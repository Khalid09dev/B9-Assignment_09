import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <div className="mx-20 flex justify-center relative">
                <img  className="w-[1300px] border h-[470px] rounded-[70px]" src="https://i.postimg.cc/CKdkjR1Q/resize-1712918627986206288banner.jpg" alt="#" />
                <div className="absolute top-40">
                    <h2 className="text-[#171717] text-[50px] font-semibold  anek">Blog Grid</h2>
                    <p className="py-3 mx-2 rounded-xl font-semibold text-center bg-[#FFFFFF] text-[14px] outfit"><span className="mr-3 text-[#171717]">HOME</span> <span className="text-[14px] font-semibold text-[#171717]">-</span> <span className="text-[#FBA968] ml-5">Blog Grid</span></p>
                </div>
            </div>

            <div className="grid mt-36 gap-8 mx-8 grid-cols-3">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;