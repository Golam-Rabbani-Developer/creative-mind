import React from 'react';
import Banner from '../components/Banner/Banner';
import Courses from '../components/Banner/Courses';
import Features from '../components/Banner/Features';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Home = () => {
    return (
        <div className='font-poppins' >
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;