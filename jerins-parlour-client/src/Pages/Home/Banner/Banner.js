import React from 'react';
import Button from '../../../components/Button';
import banner from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div className='bg-secondary flex flex-wrap lg:flex-row md:flex-col-reverse flex-col-reverse md:justify-evenly md:items-center px-10 pb-10'>
            <div className='md:space-y-6 space-y-5 md:w-1/2'>
                <h2 className="md:text-5xl text-3xl font-bold uppercase text-accent">Beauty Salon <br /> For Every Women</h2>
                <p className='text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <Button classes={'px-6'}>Get an Appointment</Button>
            </div>
            <div className='max-w-md mb-10 md:mb-0'>
                <img className='w-full' src={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;