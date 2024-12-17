import { useContext, useEffect, useRef, useState } from 'react';
import authentication from '../../assets/others/authentication2.png'
import { FaGithub, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { BiLogoFacebook } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const userRef = useRef()
    const { signIn } = useContext(AuthContext)
    const [desabled, setDesabled] = useState(true)
    const [validate, setValidate] = useState(true)
    const [captchaValue, setCaptchaValue] = useState('')
    const [show, setShow] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        // .then(result => {

        // })

    }

    const handleCaptchaChange = (e) => {
        const value = e.target.value;
        setCaptchaValue(value);

        // Enable Validate button if captcha length is 6
        if (value.length === 6) {
            setValidate(false); // Enable Validate button
        } else {
            setValidate(true); // Disable Validate button
        }
    };
    const handleVelidate = () => {
        const user_captcha_Value = userRef.current.value;
        //    const  lengt = useRef.form.length
        console.log(userRef, typeof (captchaValue.length));

        if (validateCaptcha(user_captcha_Value)) {
            setDesabled(false);
        }
        else {
            setDesabled(true);
        }


    }
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    return (
        <div className="hero bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1734016492/authentication_hn4fjt.png')] min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center ">

                    <div className="py-6">
                        <img className='' src={authentication} alt="" />



                    </div>
                </div>
                <div className="card  w-full max-w-[430px]  shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold mb-10 text-center">Login now!</h1>
                    <form onSubmit={handleSubmit} className="card-body  bg-base-100">
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

                                    show ? <FaRegEyeSlash onClick={() => setShow(!show)} /> : <FaRegEye onClick={() => setShow(!show)} />
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
                            <input ref={userRef} onChange={handleCaptchaChange} type="text" name='captcha' placeholder="type the text avobe" className="input input-bordered" required />
                            <button disabled={validate} onClick={handleVelidate} className={` ${validate ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-800 cursor-pointer text-white'} py-2.5 rounded-lg bg mt-5`}>Validate</button>
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={desabled} className="btn bg-[#D9B782]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='bg-base-100'>
                        <div className='flex text-[#D9B782] gap-2 font-bold text-center justify-center -mt-6'>
                            <h3>New Here?</h3>
                            <Link to={`/signup`} className='hover:underline'>
                                <p> Create a New Account</p>
                            </Link>
                        </div>
                        <div className='text-center space-y-3 my-5'>
                             <h2>Or Sign in with</h2>
                             <div className='mx-auto flex justify-center text-5xl gap-8 *:border-2 *:border-black *:p-2 *:rounded-full  '>
                             <BiLogoFacebook className='hover:border-[#D9B782] hover:text-white hover:bg-[#D9B782]'/>
                             <FcGoogle className='hover:border-[#D9B782] hover:text-white hover:bg-[#D9B782]'/>
                             <FaGithub className='hover:border-[#D9B782] hover:text-white hover:bg-[#D9B782]'/>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;