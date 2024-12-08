
import propTypes from 'prop-types'
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-2">
            <div>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[200px]" src={image} alt="" />
            </div>
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

MenuItem.propTypes = {
    item: propTypes.object.isRequired,
};
export default MenuItem;