import React, { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthProvider';
import Loader from '../Shared/Loader/Loader';
import ScrollToTop from '../Shared/ScrollToTop/ScrollToTop';

const Register = () => {
    ScrollToTop()

    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: ''
    })
    const [erros, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: ''
    })
    const [signUpErr, setSignUpErr] = useState('')
    const [open, setOpen] = useState(false)
    const [Copen, setCOpen] = useState(false)
    const { createUser, providerLogin, loading, setLoading, Gloading, setGLoading, updateUsersProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        providerLogin()
            .then(result => {
                const resultUser = result.user;
                const user = { name: resultUser.displayName, email: resultUser.email };
                console.log(user);
                saveUser(user)
            })
            .catch(err => {
                console.log(err.message);
                setGLoading(false);
            })
    }

    // Set Errors and Values
    const handleFnameChange = e => {
        setUserInfo({ ...userInfo, firstName: e.target.value })
    }

    const handleLnameChange = e => {
        setUserInfo({ ...userInfo, lastName: e.target.value })
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

    const handleConfirmChange = e => {
        if (userInfo.password !== e.target.value) {
            setUserInfo({ ...userInfo, confirm: e.target.value })
            return setErrors({ ...erros, confirm: 'Password did not matched!' })
        } else {
            setUserInfo({ ...userInfo, confirm: e.target.value })
            setErrors({ ...erros, confirm: '' })
        }
    }


    const handleSignUp = (e) => {
        e.preventDefault();
        if (userInfo.password !== userInfo.confirm) {
            return;
        }
        createUser(userInfo.email, userInfo.password)
            .then(result => {
                const name = `${userInfo.firstName} ${userInfo.lastName}`
                updateUsersProfile(name).then(r => {
                    const user = { name, email: userInfo.email };
                    saveUser(user)
                })
            })
            .catch(err => {
                setSignUpErr(err.message)
                setLoading(false)
            })
    }


    // POST user to the database!
    const saveUser = (user) => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                navigate('/')
            })
    }

    return (
        <div>
            <>
                <div className='border border-[#ababab] lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs lg:mx-auto lg:px-12 md:px-10 sm:px-10 px-4 py-6 md:mx-auto sm:mx-auto mx-auto'>
                    <h3 className="text-2xl font-bold text-black mb-12">Create an account</h3>

                    <form onSubmit={handleSignUp} className=''>
                        <div className=''>
                            <input type="text" placeholder='First Name' required value={userInfo.firstName} onChange={handleFnameChange} className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5] mb-4' />
                            <input type="text" placeholder='Last Name' required value={userInfo.lastName} onChange={handleLnameChange} className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5] mb-4' />
                            <input type="email" placeholder='Email' required value={userInfo.email} onChange={handleEmailChange} className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5]' />
                            <small className='mb-4 inline-block text-[#da0f0f]'>{erros.email}</small>
                            <div className='relative'>
                                <input type={open ? 'text' : 'password'} placeholder='Password' required value={userInfo.password} onChange={handlePasswordChange} autoComplete="new-password"
                                    className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5]' />
                                {userInfo.password === '' ? '' : <div onClick={() => setOpen(!open)}>
                                    {open ? <AiFillEyeInvisible size={23} className='absolute bottom-2 right-1 cursor-pointer' /> : <AiFillEye size={23} className='absolute bottom-2 right-1 cursor-pointer' />}
                                </div>}
                            </div>
                            <small className='mb-4 inline-block text-[#da0f0f]'>{erros.password}</small>
                            <div className='relative'>
                                <input type={Copen ? 'text' : 'password'} placeholder='Confirm Password' value={userInfo.confirm} onChange={handleConfirmChange} className='block py-2 w-full outline-none pl-2 border-b border-[#c5c5c5]' />
                                {userInfo.confirm === '' ? '' : <div onClick={() => setCOpen(!Copen)}>
                                    {Copen ? <AiFillEyeInvisible size={23} className='absolute bottom-2 right-1 cursor-pointer' /> : <AiFillEye size={23} className='absolute bottom-2 right-1 cursor-pointer' />}
                                </div>}
                            </div>
                            <small className='mb-4 inline-block text-[#da0f0f]'>{erros.confirm}</small>
                            <Button disabled={loading} classes={'w-full rounded-sm'}>{loading ? <Loader /> : 'Create an account'}</Button>
                            <small className='mb-4 inline-block text-[#da0f0f]'>{signUpErr}</small>
                        </div>
                    </form>
                    <p className='text-sm font-semibold text-center mt-4'>Already Have an Account? <Link className='text-primary' to='/login'>Sign In</Link></p>
                </div>

                <div className='flex justify-center items-center space-x-3 lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs mx-auto my-4'>
                    <div className='h-px w-1/3 bg-[#aaaaaa]'></div>
                    <p className='text-accent'>Or</p>
                    <div className='h-px w-1/3 bg-[#aaaaaa]'></div>
                </div>

                <div className='text-center lg:max-w-md md:max-w-md sm:max-w-sm max-w-xs mx-auto mb-5'>
                    <button onClick={handleGoogleLogin} className='border bg-transparent border-[#aaa] w-full py-3 rounded-full text-base font-semibold'>{Gloading ? <Loader /> : 'Continue with Google'}</button>
                </div>
            </>
        </div>
    );
};

export default Register;