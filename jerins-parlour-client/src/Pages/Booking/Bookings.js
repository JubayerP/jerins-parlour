import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthProvider';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const booking = useLoaderData();
    const { _id } = booking;

    const handleBookingPost = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const serviceName = form.serviceName.value;

        const booking = { name, email, serviceName, serviceId: _id };
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully booked!')
                    console.log(data);
                }
            })
    }

    return (
        <div className='w-full bg-[#F4F7FC] h-screen'>
            <form onSubmit={handleBookingPost} className='w-1/3 ml-6 mt-6'>
                <input type="text" placeholder='Name' name='name' readOnly defaultValue={user?.displayName} className='block py-2 w-full outline-none pl-2 bg-white mb-4' />
                <input type="email" placeholder='Email' name='email' readOnly defaultValue={user?.email} className='block py-2 w-full outline-none pl-2 mb-4' />
                <input type="text" placeholder='Service' name='serviceName' readOnly defaultValue={booking?.serviceName} required className='block py-2 w-full outline-none pl-2 mb-4' />
                <Button classes={'px-4'}>Book Now</Button>
            </form>
        </div>
    );
};

export default Bookings;