import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center tg-hero d-flex align-items-center ">
            <div className="col-md-6 container ">
                <div className="tg-hero-cta mb-md-0 mb-5">
                <h1 style={{color: '#fff'}}> <br/> <br/>
                "Try not to become a <br/>                                                                man of success. Rather <br/>
                become a man of value."</h1>
                <h4 style={{color: '#fff'}} >   -Albert Einstein</h4>
                </div>
            </div>
            <div className="col-md-4">
            </div>
        </main>
    );
};

export default Home;