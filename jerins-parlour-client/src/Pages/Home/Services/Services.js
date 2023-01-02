import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';
import Service from '../Service/Service';

const Services = () => {
    const {data: services, isLoading} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services')
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className=''>
            <h3 className='my-20 text-4xl text-center font-bold text-accent'>Our Awesome <span className='text-primary'>Services</span></h3>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    services.map(service => <Service service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default Services;