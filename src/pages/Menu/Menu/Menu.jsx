import Cover from "../../../shared/Cover";


const Menu = () => {
    document.title = ' Our Menu';
    return (
        <div>
            {/* https://res.cloudinary.com/dqescabbl/image/upload/v1733671089/chef-special_iep1my.jpg */}
            <Cover title="OUR MENU" bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733882346/banner3_b809rw.jpg" description="Would you like to try a dish?" bgColor={'bg-[#15151599]'}>

            </Cover>
            <h3 className=""></h3>

        </div>
    );
};

export default Menu;