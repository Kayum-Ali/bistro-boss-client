import { useEffect, useRef, useState } from 'react';
import authentication from '../../assets/others/authentication2.png'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const userRef = useRef()
    const [desabled, setDesabled] = useState(true)
    const [show, setShow] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    const handleVelidate = ()=>{
        const user_captcha_Value = userRef.current.value;
        if(validateCaptcha(user_captcha_Value)){
            setDesabled(false);
        }
        else{
            setDesabled(true);
        }


    }
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
    return (
        <div className="hero bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1734016492/authentication_hn4fjt.png')] min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center ">

                    <div className="py-6">
                        <img src={authentication} alt="" />


                    </div>
                </div>
                <div className="card  w-full  max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mb-10 text-center">Login now!</h1>
                    <form onSubmit={handleSubmit} className="card-body bg-base-100">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={`${show ? 'password' : 'text'}`} name='password' placeholder="password" className="input input-bordered" required />
                            <div className='absolute top-1/2 flex right-3 text-xl -translate-y-1/2'>
                                {
                                    
                                    show ?  <FaRegEyeSlash onClick={()=> setShow(!show)}  /> :  <FaRegEye onClick={()=> setShow(!show)} /> 
                                }
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                               <LoadCanvasTemplate />
                            </label>
                            <input ref={userRef} type="text" name='captcha' placeholder="type the text avobe" className="input input-bordered" required />
                            <button onClick={handleVelidate} className='btn mt-5'>Validate</button>
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={desabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;