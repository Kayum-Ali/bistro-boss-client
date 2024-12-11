import Cover from "../../../shared/Cover";
import Banner from "../Banner/Banner";

import Category from "../Category/Category";
import ChifRecomend from "../ChefRecomend/ChifRecomend";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopuplarMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    document.title = "Home";
    return (
        <div>

            <Banner></Banner>
            <Category></Category>

            <Cover title="Bistro Boss" bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733671089/chef-special_iep1my.jpg" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." bgColor={'bg-white'}>

            </Cover>
            <PopularMenu></PopularMenu>
            <ChifRecomend></ChifRecomend>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;