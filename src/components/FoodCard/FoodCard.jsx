
import PropTypes from "prop-types";
const FoodCard = ({img, title,description, price}) => {
   
    return (
        <div>
             <div className="text-center bg-[#f3f3f3] relative  ">
                    <div className="">
                        <img className="w-full rounded-lg" src={img} alt="" />
                    </div>
                    <div className="px-8 space-y-3 py-8">
                        <h3 className="text-2xl font-bold mt-2">{title}</h3>
                        <p className="bg-black text-white absolute top-3 right-5 px-4 py-2">{price}</p>
                        <p className="opacity-90 text-[#151515]">{description}</p>
                        <button className="uppercase bg-[#E8E8E8] text-[#BB8506] lg:text-xl font-bold px-6  py-3 rounded-lg border-b-4 border-b-[#BB8506] hover:border-none hover:bg-[#1F2937] transition duration-300 ease-in-out">
                             Add to cart
                        </button>
                    </div>
                </div>
            
        </div>
    );
};

FoodCard.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default FoodCard;