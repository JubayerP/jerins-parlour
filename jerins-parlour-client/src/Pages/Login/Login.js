import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../Shared/Loader/Loader';

const Login = () => {
    const { providerLogin, loading, setLoading, Gloading, setGLoading, signIn } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })
    const [erros, setErrors] = useState({
        email: '',
        password: ''
    })

    const [signUpErr,setSignUpErr] = useState('')
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        providerLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(err => {
                console.log(err.message);
                setGLoading(false);
            })
    }

    const handleEmailChange = e => {
        const email = e.target.value;

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setUserInfo({ ...userInfo, email: e.target.value })
            return setErrors({ ...erros, email: 'Provide a valid email' })
        }
        else {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...erros, email: '' })
        }
    }

    const handlePasswordChange = e => {
        const password = e.target.value;
        if (!/.{8,}/.test(password)) {
            setUserInfo({ ...userInfo, password: e.target.value })
            return setErrors({ ...erros, password: 'Minimum eight characters length' })
        } else {
            setUserInfo({ ...userInfo, password: e.target.value })
            setErrors({ ...erros, password: '' })
        }
    }

    const handleLogin = e => {
        e.preventDefault()
        signIn(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                setSignUpErr('')
            }).catch(err => {
                setSignUpErr(err.message)
                setLoading(false)
            })
    }

    return (
        <>
            <div className='border border-[#ababab] lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs lg:mx-auto lg:px-12 md:px-10 sm:px-10 px-4 py-6 md:mx-auto sm:mx-auto mx-auto'>
                <h3 className="text-2xl font-bold text-black mb-12">Welcome Back!</h3>

                <form onSubmit={handleLogin} className=''>
                    <div className=''>
                        <input type="email" required placeholder='Email' value={userInfo.email} onChange={handleEmailChange} className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5]' />
                        <small className='mb-4 inline-block text-[#da0f0f]'>{erros.email}</small>
                        <input type="password" required placeholder='Password' value={userInfo.password} onChange={handlePasswordChange} className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5]' autocomplete="new-password" />
                        <small className='mb-4 inline-block text-[#da0f0f]'>{erros.password}</small>
                        <Button disabled={loading} classes={'w-full rounded-sm'}>{loading ? <Loader /> :'Sign In'}</Button>
                        <small className='mb-4 inline-block text-[#da0f0f]'>{signUpErr}</small>
                    </div>
                </form>
                <p className='text-sm font-semibold text-center mt-4'>Don't Have an Account? <Link className='text-primary' to='/register'>Create an account</Link></p>
            </div>

            <div className='flex justify-center items-center space-x-3 lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs mx-auto my-4'>
                <div className='h-px w-1/3 bg-[#aaaaaa]'></div>
                <p className='text-accent'>Or</p>
                <div className='h-px w-1/3 bg-[#aaaaaa]'></div>
            </div>

            <div className='text-center lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs mx-auto mb-5'>
                <button onClick={handleGoogleLogin} className='border bg-transparent border-[#aaa] w-full py-3 rounded-full text-base font-semibold'>{Gloading ? <Loader /> :"Continue with Google"}</button>
            </div>
        </>
    );
};

export default Login;