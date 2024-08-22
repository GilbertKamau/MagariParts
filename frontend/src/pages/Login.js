import React, { useState } from 'react';
import loginIcons from '../Assets/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleonChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data login', data);
    };

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-2 py-5 w-full max-w-sm mx-auto'>
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={loginIcons} alt='loginicons' />
                        </div>
                        <form> <div className='text-xs bg-opacity-75 bg-slate-200 p-1 py-1 text-center absolute bottom-0 width-full'>
                            Upload photo
                        </div></form>
                    </div>
                    <form className='pt-6' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email: </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='Enter email'
                                    name="email"
                                    value={data.email}
                                    onChange={handleonChange}
                                    className='w-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div>
                            <label>Password: </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter password'
                                    name="password"
                                    value={data.password}
                                    onChange={handleonChange}
                                    className='w-full outline-none bg-transparent' />
                                <div className='cursor-pointer tx-xl' onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>
                            <Link to={"/forgot-password"} className="block w-fit ml-auto hover:underline hover:text-orange-400">
                                Forgot Password
                            </Link>
                        </div>

                        <button className='bg-orange-400 hover:bg-orange-700 text-white px-6 py-2 w-max-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>
                            Login
                        </button>
                    </form>

                    <p className="my-4">Don't have an account? <Link to={'/sign-up'} className='text-orange-400 hover:underline'>Sign up</Link></p>
                </div>
            </div>
        </section>
    );
}

export default Login;
