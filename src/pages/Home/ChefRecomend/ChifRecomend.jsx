import FoodCard from "../../../components/FoodCard/FoodCard";
import SectionTitle from "../../../components/SectionTitle";


const ChifRecomend = () => {
    return (
        <section className="container mx-auto">
            {/* call us section */}
            <div className="bg-black text-white flex justify-center items-center h-[150px]">
                <h2 className="text-3xl font-bold">Call Us: 01779596173</h2>
            </div>
            <SectionTitle subHeading="Should Try" heading="CHEF RECOMMENDS"></SectionTitle>

            <div className="flex flex-col lg:flex-row gap-6">
               
               <FoodCard img='https://res.cloudinary.com/dqescabbl/image/upload/v1733837352/Rectangle_5_dvxa2k.png' title='Salad'></FoodCard>
               <FoodCard img='https://res.cloudinary.com/dqescabbl/image/upload/v1733837352/Rectangle_5_dvxa2k.png' title='Salad'></FoodCard>
               <FoodCard img='https://res.cloudinary.com/dqescabbl/image/upload/v1733837352/Rectangle_5_dvxa2k.png' title='Salad'></FoodCard>
               {/* <FoodCard></FoodCard>
               <FoodCard></FoodCard> */}
               
            </div>

        </section>
    );
};

export default ChifRecomend;