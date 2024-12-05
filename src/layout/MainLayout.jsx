import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-screen-[1920px]"> 
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;