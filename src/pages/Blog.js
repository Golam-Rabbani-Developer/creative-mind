import React from 'react';
import Blogs from '../components/Banner/Blogs';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Blog = () => {
    return (
        <div>
           <Header></Header> 
           <Blogs></Blogs>
           <Footer></Footer>
        </div>
    );
};

export default Blog;