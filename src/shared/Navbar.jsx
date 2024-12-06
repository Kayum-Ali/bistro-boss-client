import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-[#151515c0]">
            <div className="">
                <h2>Bistro Boss </h2>
                <h2>Resturent</h2>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            
            
        </div>
    );
};

export default Navbar;