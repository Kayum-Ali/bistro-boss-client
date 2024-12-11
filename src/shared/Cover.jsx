import propTypes from 'prop-types'
const Cover = ({title, description, bgImg, bgColor}) => {
    return (
        <div  style={{
            backgroundImage: `url("${bgImg}")`
          }} className={` lg:h-[600px] bg-cover bg-center lg:py-16 py-10 lg:px-20 px-6   bg-fixed flex items-center justify-center w-full`} >
            <div className={`${bgColor} bg-center bg-cover h-[300px] opacity-80 flex justify-center items-center rounded-md w-full container mx-auto ${bgColor === 'bg-white' ? 'text-black' : 'text-white'}`}>
                <div className=" text-center space-y-2 lg:w-2/3 mx-auto p-10 lg:p-0">
                    <h2 className="uppercase text-3xl">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    );
};

Cover.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    bgImg: propTypes.string.isRequired,
    bgColor: propTypes.string
 };

export default Cover;