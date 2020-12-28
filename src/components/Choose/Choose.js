import React from 'react';
import CountUp from 'react-countup';
import './Choose.css';

const Choose = () => {
    return (
        <div className="container service">
            <h1 className="text-center text-uppercase mb-5 pb-5">Why Choose us</h1>
            <div className="styled-div"> </div>
            <div className="d-flex justify-content-around">
                <div className="text-center">
                <CountUp className="text-muted" style={{ fontWeight: "700", fontSize: "55px" }} start={0} end={1080} duration={10} />
                <p className="text-uppercase">Learners</p>
                </div>
                <div className="text-center">
                <CountUp className="text-muted" style={{ fontWeight: "700", fontSize: "55px" }} end={50} duration={12} />                    
                <p className="text-uppercase">Courses</p>
                </div>
                <div className="text-center">
                <CountUp className="text-muted" style={{ fontWeight: "700", fontSize: "55px" }} end={13} duration={15} />
                <p className="text-uppercase">Projects</p>
                </div>
            </div>
        </div>
        
    );
};

export default Choose;