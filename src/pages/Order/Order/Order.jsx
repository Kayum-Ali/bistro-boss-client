import useMenu from "../../../hooks/useMenu";
import Cover from "../../../shared/Cover";


const Order = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    return (
        <div>
            <Cover bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733894430/banner2_ikfrfe.jpg" title="Our Shop" description="Would you like to try a dish?" bgColor={'bg-[#15151599]'}></Cover>
            
        </div>
    );
};

export default Order;