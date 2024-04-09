
const Estate = ({estate}) => {
    const {id, image, title, description} = estate;
    return (
        <div>
            <div className="border-0 p-10 bg-white rounded-3xl">
                <img className="w-[70px] h-[70px] mb-12" src={image} alt="#" />
                <p className="text-[25px] anek font-semibold text-[#171717]">{title}</p>
                <p className="text-[#6E6E78] text-[17px] outfit font-medium mb-3">{description}</p>
                <button className="py-2.5 px-5 bg-green-400 text-white rounded-lg">Details</button>
            </div>
        </div>
    );
};

export default Estate;