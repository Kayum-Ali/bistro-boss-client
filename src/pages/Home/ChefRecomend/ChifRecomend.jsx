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
                <div className="text-center bg-[#f3f3f3]">
                    <div className="">
                        <img className="w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1733837352/Rectangle_5_dvxa2k.png" alt="" />
                    </div>
                    <div className="px-8 space-y-3 my-8">
                        <h3 className="text-2xl font-bold mt-2">Caeser Salad</h3>
                        <p className="opacity-90 text-[#151515]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase bg-[#E8E8E8] text-[#BB8506] lg:text-xl font-bold px-6  py-3 rounded-lg border-b-4 border-b-[#BB8506] hover:border-none hover:bg-[#1F2937] transition duration-300 ease-in-out">
                             Add to cart
                        </button>
                    </div>
                </div>
                <div className="text-center bg-[#f3f3f3]">
                    <div className="">
                        <img className="w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1733837352/Rectangle_5_dvxa2k.png" alt="" />
                    </div>
                    <div className="px-8 space-y-3 my-8">
                        <h3 className="text-2xl font-bold mt-2">Caeser Salad</h3>
                        <p className="opacity-90 text-[#151515]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase bg-[#E8E8E8] text-[#BB8506] lg:text-xl font-bold px-6  py-3 rounded-lg border-b-4 border-b-[#BB8506] hover:border-none hover:bg-[#1F2937] transition duration-300 ease-in-out">
                             Add to cart
                        </button>
                    </div>
                </div>
                <div className="text-center bg-[#f3f3f3]">
                    <div className="">
                        <img className="w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1733837352/Rectangle_5_dvxa2k.png" alt="" />
                    </div>
                    <div className="px-8 space-y-3 my-8">
                        <h3 className="text-2xl font-bold mt-2">Caeser Salad</h3>
                        <p className="opacity-90 text-[#151515]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className="uppercase bg-[#E8E8E8] text-[#BB8506] lg:text-xl font-bold px-6  py-3 rounded-lg border-b-4 border-b-[#BB8506] hover:border-none hover:bg-[#1F2937] transition duration-300 ease-in-out">
                             Add to cart
                        </button>
                    </div>
                </div>
               
            </div>

        </section>
    );
};

export default ChifRecomend;