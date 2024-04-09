import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Estates></Estates>
            <AboutUs></AboutUs>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;