import {useLoaderData, useParams, Link} from 'react-router-dom';

const EstateDetails = () => {
    const estates = useLoaderData();
    console.log(estates)
    const {id} = useParams();
    console.log(id, estates)
    const toIntId = parseInt(id);
    const estate = estates.find(estate => estate.id === toIntId);
    // console.log(estate)
    const { image, title, description, category, location, duration, availability, cost, contact} = estate;

    return (
        <div className='flex mx-32 max-h-screen justify-center items-center'>
            {
                
            }
            <div className='flex items-center gap-5 border-0 p-10 bg-white rounded-3xl'>
                <div className='w-1/2'>
                    <img className="w-[70px] h-[70px] mb-12" src={image} alt="#" />
                    <p className="text-[25px] anek font-semibold text-[#171717]">{title}</p>
                    <p className="text-[#6E6E78] text-[17px] outfit font-medium mb-3">{description}</p>
                    <Link to="/"><button className="py-2.5 px-5 bg-green-400 text-white rounded-lg">Purchase</button></Link>
                </div>
                <div className='w-1/2'>
                    <p className="pb-1 text-[20px]  font-medium outfit text-[#6E6E78]">Category: {category}</p>
                    <p className="pb-1 text-[20px]  font-medium outfit text-[#6E6E78]">Duration: {duration}</p>
                    <p className="pb-1 text-[20px]  font-medium outfit text-[#6E6E78]">Availability: {availability}</p>
                    <p className="text-[#6E6E78] text-[20px] outfit font-medium mb-1">Location: {location}</p>
                    <p className="text-[#6E6E78] text-[20px] outfit font-medium mb-3">Cost: {cost}</p>
                    <p className="text-[#6E6E78] text-[20px] outfit font-medium mb-1">Email: {contact.email}</p>
                    <p className="text-[#6E6E78] text-[20px] outfit font-medium mb-1">Phone: {contact.phone}</p>
                    <p className="text-[#6E6E78] text-[20px] outfit font-medium mb-1">Website: {contact.website}</p>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;