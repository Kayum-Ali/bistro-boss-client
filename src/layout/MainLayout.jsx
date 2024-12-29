import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";


const MainLayout = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter= location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div className="max-w-screen-[1920px] "> 
     
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default MainLayout;