import React from 'react';
import Banner from '../Banner/Banner';
import InfoBanner from '../InfoBanner/InfoBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <InfoBanner />
        </div>
    );
};

export default Home;