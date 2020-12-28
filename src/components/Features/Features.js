import React from 'react';
import logo from '../../Img/Group 39.png';
import logo1 from '../../Img/Group 44.png';
import logo2 from '../../Img/television.png';
import './Features.css';

const Features = () => {
    return (
    <div className="main-features">
        <section className="container" style={{ padding: "50px 0px" }}>
            <h1 className="text-center text-uppercase mb-5 pb-5" style={{ color: "#000" }} >Our exclusive features</h1>
            <div className="row ml-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-3" style={{ width: "350px" }}>
                        <div className="card style-card">
                            <div style={{
                                width: "120px",
                                position: "absolute",
                                top: "-60px",
                                left: "33%",
                                padding: "20px",
                                backgroundColor: "white",
                                height: "120px",
                                borderRadius: "50%",
                                overFlow: "hidden",
                                border: "1px solid gray"
                            }}>
                                <img height="100%" width="100%" src={logo} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body"
                                style={{ marginTop: "100px" }}>
                                <h3 className="card-text text-center text-uppercase">
                                  <b>  Full lifetime <br /> access </b>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" style={{ width: "350px" }}>
                        <div className="card style-card">
                            <div style={{
                                width: "120px",
                                position: "absolute",
                                top: "-60px",
                                left: "32%",
                                padding: "20px",
                                backgroundColor: "white",
                                height: "120px",
                                borderRadius: "50%",
                                overFlow: "hidden",
                                border: "1px solid gray"
                            }}>
                                <img height="70px" width="40px" src={logo1} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body"
                                style={{ marginTop: "100px" }}>
                                <h3 className="card-text text-center text-uppercase">
                                  <b>  Certificate of <br /> completion </b>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3" style={{ width: "350px" }}>
                        <div className="card style-card">
                            <div style={{
                                width: "120px",
                                position: "absolute",
                                top: "-60px",
                                left: "30%",
                                padding: "20px",
                                backgroundColor: "white",
                                height: "120px",
                                borderRadius: "50%",
                                overFlow: "hidden",
                                border: "1px solid gray"
                            }}>
                                <img height="100%" width="100%" src={logo2} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body"
                                style={{ marginTop: "100px" }}>
                                <h3 className="card-text text-center text-uppercase">
                                  <b>  Access on <br /> mobile and TV </b>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default Features;