import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import LatestNews from "../LatestNews/LatestNews";
import OnlyPhone from "../OnlyPhone/OnlyPhone";
import {Helmet} from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Zavar</title>
            </Helmet>
            <Banner></Banner>
            <Estates></Estates>
            <AboutUs></AboutUs>
            <OnlyPhone></OnlyPhone>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;