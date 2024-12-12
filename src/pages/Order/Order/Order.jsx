import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../../hooks/useMenu";
import 'react-tabs/style/react-tabs.css';
import Cover from "../../../shared/Cover";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";



const Order = () => {
    const {category} = useParams()
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks']
    const initialIndex = categories.indexOf(category)
    const [menu] = useMenu();
    console.log(tabIndex); 
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    const pizza = menu.filter(item => item.category === "pizza")
    return (
        <div>
            <Cover bgImg="https://res.cloudinary.com/dqescabbl/image/upload/v1733894430/banner2_ikfrfe.jpg" title="Our Shop" description="Would you like to try a dish?" bgColor={'bg-[#15151599]'}></Cover>
            <div className="container mx-auto my-5 px-5 lg:px-0">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'text-sm lg:text-base mb-3 text-center'}>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                       <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                       <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                       <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                       <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                       <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;