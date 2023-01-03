import React from 'react';
import Button from '../../../components/Button';

const Contact = () => {
    return (
        <div className='bg-secondary pt-28 pb-11'>
            <form className='md:max-w-3xl max-w-sm mx-auto'>
                <h2 className="text-3xl font-bold text-accent text-center mb-16">Let us handle your project, professionally.</h2>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
                    <input className='pl-2 py-3 rounded-md outline-0' placeholder='First Name' type="text" />
                    <input className='pl-2 py-3 rounded-md outline-0' placeholder='Last Name' type="text" />
                    <input className='pl-2 py-3 rounded-md outline-0' placeholder='Email Address' type="text" />
                    <input className='pl-2 py-3 rounded-md outline-0' placeholder='Phone Number' type="text" />
                    <textarea name="" id="" cols="30" rows="4" className='lg:col-span-2 pl-2 pt-1 rounded-md outline-0' placeholder='Your Message'></textarea>
                </div>
                <Button classes='px-6 mt-4' pClass='text-center'>Send Message</Button>
            </form>
        </div>
    );
};

export default Contact;