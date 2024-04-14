
const News = ({news}) => {
    const {id, date, category, title, image} = news;

    return (
        <div>
            <div className="relative">
                <img className="w-[325px] h-[370px] rounded-3xl " src={image} alt="#" />
                <p className="absolute bottom-28 ml-16 text-[#FBA968] text-center  text-[16px] outfit font-medium ">{date} - {category}</p>
                <p className="absolute bottom-7 text-[#FFFFFF] text-[24px] anek font-semibold text-center">{title}</p>
            </div>
        </div>
    );
};

export default News;