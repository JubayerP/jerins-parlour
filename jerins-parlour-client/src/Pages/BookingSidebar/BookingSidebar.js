import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

const BookingSidebar = () => {
    const [open, setOpen] = useState(true);
    const menus = [
        { name: "Book", link: "/booking", icon: MdOutlineDashboard },
        { name: "Booking List", link: "/", icon: AiOutlineUser },
        { name: "Review", link: "/", icon: FiMessageSquare }
      ];
    return (
        <>
            <section className="flex gap-6 z-20">
            <div
                className={`bg-white duration-500 ${
                    open ? "lg:w-72 md:w-32 w-28" : "lg:w-16 md:w-14 w-14"
                  } text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer lg:hidden md:hidden"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className={`mt-4 lg:flex flex-col gap-4 relative ${open ? 'flex' : 'hidden'}`}>
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${menu?.margin && "mt-5"
                                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2
                                className={`whitespace-pre duration-500`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
            <Outlet />
            </section>
        </>
    );
};

export default BookingSidebar;