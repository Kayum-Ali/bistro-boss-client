import FoodCard from "../../../components/FoodCard/FoodCard";

import PropTypes from "prop-types";
const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                items.map((item) => <FoodCard key={item._id} img={item.image} title={item.name} description={item.recipe} price={item.price}></FoodCard>)
            }
        </div>

    );
};

OrderTab.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrderTab;