import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Login = () => {
    return (
        <>
            <div className='border border-[#ababab] lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs lg:mx-auto lg:px-12 md:px-10 sm:px-10 px-4 py-6 md:mx-auto sm:mx-auto mx-auto'>
                <h3 className="text-2xl font-bold text-black mb-12">Create an account</h3>

                <form className=''>
                    <div className=''>
                        <input type="text" placeholder='First Name' className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5] mb-4' />
                        <input type="text" placeholder='Last Name' className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5] mb-4' />
                        <input type="email" placeholder='Email' className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5] mb-4' />
                        <input type="password" placeholder='Password' className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5] mb-4' />
                        <input type="password" placeholder='Confirm Password' className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5] mb-4' />
                        <Button classes={'w-full rounded-sm'}>Create an Account</Button>
                    </div>
                </form>
                <p className='text-sm font-semibold text-center mt-4'>Don't Have an Account? <Link className='text-primary' to='/register'>Create an Account</Link></p>
            </div>

            <div className='flex justify-center items-center space-x-3 lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs mx-auto my-4'>
                <div className='h-px w-1/3 bg-[#aaaaaa]'></div>
                <p className='text-accent'>Or</p>
                <div className='h-px w-1/3 bg-[#aaaaaa]'></div>
            </div>

            <div className='text-center lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs mx-auto mb-5'>
                <button className='border bg-transparent border-[#aaa] w-full py-3 rounded-full text-base font-semibold'>Continue with Google</button>
            </div>
        </>
    );
};

export default Login;