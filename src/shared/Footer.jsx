import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className=" text-white flex ">
            <div className="bg-[#1F2937] flex-1 flex justify-end py-10 pr-16">
                <div className="text-center">
                    <h2 className="text-2xl font-medium mb-5">CONTACT US</h2>
                    <div className="space-y-2">
                        <p>123 ABS Street, Uni 21, Bangladesh </p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

            </div>
            <div className="bg-[#111827] flex-1 py-10">
                <div className="pl-16 w-[300px] text-center space-y-3 mt-5">
                    <h2>Follow US</h2>
                    <p>Join us on social media</p>
                    <div className="flex gap-3 justify-center text-center">
                        <FaFacebookF />
                        <FiInstagram />
                        <BsTwitter />
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;