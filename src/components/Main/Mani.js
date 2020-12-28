import React from 'react';
import Navbar from '../Main/Mani';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';

const Mani = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            {/* <Subscribe/> */}
            <Footer/>
        </div>
    );
};

export default Mani;