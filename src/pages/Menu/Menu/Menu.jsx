import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../../shared/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    document.title = ' Our Menu';
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
    const pizza = menu.filter(item => item.category === "pizza")
    return (
        <div>
           

            <Cover title="OUR MENU" bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733882346/banner3_b809rw.jpg" description="Would you like to try a dish?" bgColor={'bg-[#15151599]'}>
            </Cover>

            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <Cover title="DESSERTS" bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733888856/dessert-bg_ofkbyj.jpg" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgColor={'bg-[#15151599]'}></Cover>

            <MenuCategory items={dessert}></MenuCategory>

            <Cover title="Pizza" bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733889156/pizza-bg_ssecpd.jpg" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgColor={'bg-[#15151599]'}></Cover>
            
            <MenuCategory items={pizza}></MenuCategory>

            <Cover title="Salad" bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733889298/salad-bg_w0twhy.jpg" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgColor={'bg-[#15151599]'}></Cover>
           

        </div>
    );
};

export default Menu;