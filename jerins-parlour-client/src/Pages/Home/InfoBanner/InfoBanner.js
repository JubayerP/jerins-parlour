import React from 'react';
import img from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';

const InfoBanner = () => {
    return (
        <div className='bg-secondary flex lg:flex-row md:flex-col flex-col justify-between items-center gap-20 px-10 py-32'>
            <div className='max-w-xl'>
                <img src={img} alt="" />
            </div>
            <div className='space-y-10'>
                <h3 className="text-3xl font-bold text-accent leading-[43px]">Let us handle your screen <span className='text-primary'>Professionally</span>.</h3>
                <p className='text-sm text-black opacity-70'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

                <div className='flex items-center space-x-10'>
                    <div className=''>
                        <h2 className="text-4xl font-bold text-primary mb-5">500+</h2>
                        <p className='text-accent font-semibold'>Happy Customer</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-primary mb-5">16+</h2>
                        <p className='text-accent font-semibold'>Total Service</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBanner;