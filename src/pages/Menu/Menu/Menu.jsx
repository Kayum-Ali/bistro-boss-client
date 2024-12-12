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
           

            <Cover title="OUR MENU" bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733882346/banner3_b809rw.jpg" description="Would you like to try a dish?"  bgColor={'bg-[#15151599]'}>
            </Cover>

            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>

            <MenuCategory items={offered} title={'offered'}  description="Would you like to try a dish?" image={'https://res.cloudinary.com/dqescabbl/image/upload/v1733671089/chef-special_iep1my.jpg'} ></MenuCategory>

            {/* <Cover title="DESSERTS" bgImg="" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgColor={'bg-[#15151599]'}></Cover> */}

            <MenuCategory items={dessert} title={'desert'} image={'https://res.cloudinary.com/dqescabbl/image/upload/v1733888856/dessert-bg_ofkbyj.jpg'}></MenuCategory>

            {/* <Cover title="Pizza" bgImg="" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgColor={'bg-[#15151599]'}></Cover> */}
            
            <MenuCategory items={pizza} title={'pizza'} image={'https://res.cloudinary.com/dqescabbl/image/upload/v1733889156/pizza-bg_ssecpd.jpg'}></MenuCategory>

            {/* <Cover title="Salad" bgImg="" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgColor={'bg-[#15151599]'}></Cover> */}

            <MenuCategory items={salad} title={'salad'} image={'https://res.cloudinary.com/dqescabbl/image/upload/v1733889298/salad-bg_w0twhy.jpg'}></MenuCategory>

            {/* <Cover title="SOUPS" bgImg="" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." bgColor={'bg-[#15151599]'}></Cover> */}

            <MenuCategory items={soup} title={'soup'} image={'https://res.cloudinary.com/dqescabbl/image/upload/v1733889574/soup-bg_bnnp6z.jpg'}></MenuCategory>
           

        </div>
    );
};

export default Menu;