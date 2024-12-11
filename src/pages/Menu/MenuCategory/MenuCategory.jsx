import MenuItem from "../../../shared/MenuItem/MenuItem";

import PropTypes from 'prop-types';
const MenuCategory = ({items}) => {
    return (
        <div className="container mx-auto my-10">
            <div className="grid md:grid-cols-2 gap-10 px-5">

                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className={`text-center`}>
                <button  className="btn btn-outline border-0 border-b-4 mt-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>

        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MenuCategory;