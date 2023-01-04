import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { serviceName, price, image, details, _id } = service;
    return (
        <Link to={`/booking/${_id}`}>
            <div className='text-center max-w-xs mx-auto mb-10 px-6 py-3 rounded-xl hover:shadow-card even:shadow-card cursor-default'>
                <img className='mx-auto w-[72px] h-[72px]' src={image} alt="" />
                <h5 className='text-xl font-semibold text-accent my-4'>{serviceName}</h5>
                <h5 className="text-xl font-medium text-primary mb-1">${price}</h5>
                <p className='text-base w-[80%] mx-auto text-black opacity-70'>{details}</p>
            </div>
        </Link>
    );
};

export default Service;