import React from 'react';
import { Outlet } from 'react-router-dom';
import BookingSidebar from '../Pages/BookingSidebar/BookingSidebar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Booking = () => {
    return (
        <div>
            <Navbar />
            <BookingSidebar />
        </div>
    );
};

export default Booking;