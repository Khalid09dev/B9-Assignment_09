// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='flex items-center gap-5 bg-orange-100 mx-10 rounded-[35px]'>
                        <div className='pl-16'>
                            <h5 className='text-[#171717] outfit font-medium text-[15px]'>EXPLORE MORE WITH US</h5>
                            <h1 className='text-[70px] pt-2 pb-3 text-[#171717] font-semibold anek'>Looking for <span className='block mb-0 leading-none'>HDIS Services?</span></h1>
                            <hr />
                            <p className='pt-4 text-[#6E6E78] outfit text-base pb-6'>Explore comprehensive HDIS services for personalized care and support tailored to individual needs and preferences.</p>
                            <button className='text-[#171717] py-[14px] px-[33px] font-medium outfit text-[12px] bg-[#FBA968] rounded-full hover:bg-white duration-200'>MORE ABOUT US</button>
                        </div>
                        <img className='w-7/12 h-1/2 rounded-r-[35px]' src="https://i.postimg.cc/gjTZfYgK/banner-img01.webp" alt="banner_1" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center gap-5 bg-orange-100 mx-10 rounded-[35px]'>
                        <div className='pl-16'>
                            <h5 className='text-[#171717] outfit font-medium text-[15px]'>EXPLORE MORE WITH US</h5>
                            <h1 className='text-[70px] pt-2 pb-3 text-[#171717] font-semibold anek'>Provide <span className='block mb-0 leading-none'>HDIS Support?</span></h1>
                            <hr />
                            <p className='pt-4 text-[#6E6E78] outfit text-base pb-6'>Enhancing quality of life through tailored assistance and resources for individuals with disabilities. Empowerment-focused care</p>
                            <button className='text-[#171717] py-[14px] px-[33px] font-medium outfit text-[12px] bg-[#FBA968] rounded-full hover:bg-white duration-200'>MORE ABOUT US</button>
                        </div>
                        <img className='w-7/12 h-1/2 rounded-r-[35px]' src="https://i.postimg.cc/hjMyQdGP/banner-img02.webp" alt="banner_2" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;