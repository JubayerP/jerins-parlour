import React from 'react';
import ScrollToTop from '../../Shared/ScrollToTop/ScrollToTop';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoBanner from '../InfoBanner/InfoBanner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    ScrollToTop()
    return (
        <div>
            <Banner />
            <Services />
            <InfoBanner />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;