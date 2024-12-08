import { Link, NavLink } from "react-router-dom";
import '../styles/NavbarStyle.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        // 
        <div className="bg-[#232323] z-50">
            <nav>
                <div id="mobile" className="text-white flex">
                    {
                        toggle ? <AiOutlineClose className="text-2xl " onClick={() => setToggle(!toggle)} />
                            :
                            <RxHamburgerMenu className="text-2xl " onClick={() => setToggle(!toggle)} />
                    }


                </div>
                <div>
                    <Link>
                        <img className="w-[150px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1733546973/logo_esjrp1.png" alt="" />
                    </Link>
                </div>
                <div>
                    <ul id="navbar" className={`${toggle ? '#navbar active' : '#navbar'} uppercase`}>
                        <li><NavLink to="/" className="">Home</NavLink></li>
                        <li><NavLink to="/about" className="text-[#fff]">CONTACT us</NavLink></li>
                        <li><NavLink to="/contact" className="text-[#fff]">DASHBOARD</NavLink></li>
                        <li><NavLink to="/blog" className="text-[#fff]">Our Menu</NavLink></li>
                        <li><NavLink to="/login" className="text-[#fff]">Our Shop</NavLink></li>
                        <li><NavLink to="/signup" className="text-[#fff]">Sign Up</NavLink></li>

                        <div className="  items-center font-semibold text-white   gap-5 hidden lg:flex ">
                            <div className="relative">
                                <FaCartShopping className="text-white p-2 rounded-full text-4xl bg-[#17cf97]" />
                                <h2 className="absolute bottom-0 bg-red-600 p-1 rounded-full h-[20px] flex items-center justify-center right-0 text-xs">0</h2>
                            </div>
                            <h2>Sign Out</h2>
                            <FaUserCircle className="text-white text-4xl" />
                        </div>

                    </ul>

                </div>
                <div className="flex items-center  text-white  gap-5  lg:hidden">
                <div className="relative">
                                <FaCartShopping className="text-white p-2 rounded-full text-4xl bg-[#17cf97]" />
                                <h2 className="absolute bottom-0 bg-red-600 p-1 rounded-full h-[20px] flex items-center justify-center right-0 text-xs">0</h2>
                            </div>

                    <div>
                        <FaUserCircle className="text-white text-3xl" />
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default Navbar;