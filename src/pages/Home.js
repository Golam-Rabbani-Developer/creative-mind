import React, { useContext, useState } from 'react';
import { ThemeContext } from '../App';
import Banner from '../components/Banner/Banner';
import Courses from '../components/Banner/Courses';
import Features from '../components/Banner/Features';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Home = () => {
    const [dark, setDark] = useContext(ThemeContext)
    return (
        <div className={`font-poppins ${dark ? 'bg-black text-whtie' : 'bg-white text-black'}`} >
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <Footer></Footer>
        </div>
    );
};

export default Home;