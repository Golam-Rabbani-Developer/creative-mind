import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <img className='h-[40vh] lg:h-[95vh] w-full' src="https://iili.io/DrkRON.png" alt="banner-img" />
            </div>
            <div className='absolute top-32 lg:top-1/3 left-12 md:left-32 text-start'>
                <p className='text-gray-300'>
                    Taking care of education is our practice</p>
                <h2 className='text-2xl lg:text-6xl font-bold text-white'>Welcome to Best Tutors Home</h2>
                <button className="btn  btn-primary rounded-none mt-4">Explore Us</button>
            </div>
        </div>
    );
};

export default Banner;