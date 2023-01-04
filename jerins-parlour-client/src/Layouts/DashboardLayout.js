import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            {/* <Navbar /> */}

            <div className="flex">
                <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <Link to='/'><h2 className="text-xl font-bold">Home</h2></Link>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                <li className="rounded-sm">
                                    <Link
                                        to="/dashboard/myorders"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Order List</span>
                                    </Link>
                                </li>
                                <li className="rounded-sm">
                                    <Link
                                        to="/"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Add Service</span>
                                    </Link>
                                </li>
                                <li className="rounded-sm">
                                    <Link
                                        to="/"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Make Admin</span>
                                    </Link>
                                </li>
                                <li className="rounded-sm">
                                    <Link
                                        to="/"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span>Manage Service</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-12">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;