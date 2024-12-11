
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular")
    // const [menu, setMenu] = useState([]);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //             const menuItems = data.filter(item => item.category === "popular");
    //             setMenu(menuItems)
    //         })
    // }, [])


    return (
        <section className="mb-12 container mx-auto">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 px-5">

                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className={`text-center`}>
                <button  className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;