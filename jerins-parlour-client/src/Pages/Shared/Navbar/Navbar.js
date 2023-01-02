import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Button from '../../../components/Button';


const Navbar = () => {
    const [open, setOpen] = useState();
    const menuItems = <>
        <Link className='md:p-4 py-2 block' to='/home'>Home</Link>
        <Link className='md:p-4 py-2 block' to='/'>Our Portfolio</Link>
        <Link className='md:p-4 py-2 block' to='/'>Our Team</Link>
        <Link className='md:p-4 py-2 block' to='/'>Contact Us</Link>
        <Link className='md:p-4 py-2 block' to='/login'><Button classes={'px-8'}>Login</Button></Link>
    </>
    return (
        <div className='flex flex-wrap w-full justify-between items-center px-10 bg-secondary py-3'>
            <div>
                <Link to='/'><img className='w-32' src={logo} alt="" /></Link>
            </div>
            <svg
                onClick={()=>setOpen(!open)}
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden flex"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            <div className={`${open ? 'flex' : 'hidden'}  w-full md:flex md:items-center md:w-auto text-sm`}>
                <ul className='md:flex md:justify-between md:items-center md:pt-0'>
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;