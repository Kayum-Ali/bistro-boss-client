import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

import PropTypes from 'prop-types';
const MenuCategory = ({ items, title, image }) => {
    return (
        <div className="container mx-auto my-10">
            {title && <Cover title={title} bgImg={image} description="Would you like to try a dish?" bgColor={'bg-[#15151599]'}>
            </Cover>}
            <div className="grid md:grid-cols-2 gap-10 px-5">

                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className={`text-center`}>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase">ORDER YOUR {title} FOOD</button>
                </Link>
            </div>

        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string,
    image: PropTypes.string
};
export default MenuCategory;