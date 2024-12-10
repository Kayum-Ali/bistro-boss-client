
import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center bg-[rgba(21,21,21,0.7)] h-full pb-10 gap-8  lg:pb-20 lg:pt-12 pt-5 lg:px-36 px-5">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;