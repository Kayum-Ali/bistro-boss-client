import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const menuItems = data.filter(item => item.category === "popular");
            setMenu(menuItems)
        })
    }, [])
    return (
        <section className="mb-12 container mx-auto">
            <SectionTitle 
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 px-5">
                
                  {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                  }
            </div>
            
        </section>
    );
};

export default PopularMenu;