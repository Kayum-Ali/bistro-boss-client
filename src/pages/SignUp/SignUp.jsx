
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import authentication from '../../assets/others/authentication2.png'
import { useState } from "react";
import { useForm } from "react-hook-form";



const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
    }
    console.log(watch("name"))

    const [show, setShow] = useState(true)

    return (
        <div className="hero bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1734016492/authentication_hn4fjt.png')] min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center ">

                    <div className="py-6">
                        <img className='' src={authentication} alt="" />
                    </div>
                </div>
                <div className="card  w-full max-w-[430px]  shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mb-10 text-center">Sign Up</h1>
                 <form onSubmit={handleSubmit(onSubmit)} className="card-body  bg-base-100">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type={`${show ? 'password' : 'text'}`} name='password' placeholder="password" className="input input-bordered" required />
                            <div className='absolute top-1/2 flex right-3 text-xl -translate-y-1/2'>
                                {

                                    show ? <FaRegEyeSlash onClick={() => setShow(!show)} /> : <FaRegEye onClick={() => setShow(!show)} />
                                }
                            </div>
                        </div>
                        <div>
                              <input className="w-full py-2.5 bg-[#d9b8828f] rounded-lg mt-3 hover:bg-[#D9B782]" type="submit" value="Sign Up" />
                        </div>
                       
                       
                    </form>
                    <div className='bg-base-100'>
                        <div className='flex text-[#D9B782] gap-2 font-bold text-center justify-center -mt-6'>
                            <h3>Already Have an Account</h3>
                            <Link to={`/login`} className='hover:underline'>
                                <p> Login Here</p>
                            </Link>
                        </div>
                        <div className='text-center space-y-3 my-5'>
                            <h2>Or Sign Up with</h2>
                            <div className='mx-auto flex justify-center text-5xl gap-8 *:border-2 *:border-black *:p-2 *:rounded-full  '>
                                <BiLogoFacebook className='hover:border-[#D9B782] hover:text-white hover:bg-[#D9B782]' />
                                <FcGoogle className='hover:border-[#D9B782] hover:text-white hover:bg-[#D9B782]' />
                                <FaGithub className='hover:border-[#D9B782] hover:text-white hover:bg-[#D9B782]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;