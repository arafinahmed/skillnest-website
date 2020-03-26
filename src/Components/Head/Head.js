import React from 'react';
import './Head.css';

const Head = () => {
    const tagline = "Tagline will be here Tagline will be here";
    return (
        <div>


            <div className="head-container">

                <div className="navbar-style">
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <a className="navbar-brand" href="#"><span className="logo-name">SkillNest360</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <a className="nav-item nav-link  " href="#home">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link  " href="#about">About</a>
                            <a className="nav-item nav-link  " href="#products">Products</a>
                            <a className="nav-item nav-link  " href="#services">Services</a>
                            <a className="nav-item nav-link  " href="#team">Team</a>
                            <a className="nav-item nav-link  " href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
                </div>




                <div className="container">
                    <div className="background">
                    <div className="d-flex justify-content-around ">
                        <div className="col-md-6 ">
                            <div className="headSide">
                                <div className="col-md-12">

                                    <div className="leftside">
                                    <div className="logo-name d-flex justify-content-center">
                                        <div>
                                            <h1> <span className="logo-overline">SkillN</span>est</h1>
                                            <h1>360</h1>
                                        </div>
                                    </div>
                                    <div className="tagline d-flex justify-content-center">
                                        <h3>{tagline}</h3>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-lg btn-primary">EXPLORE</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="headSide">
                            <div className="leftside">
                            <div className="col-md-8">
                            <img className="img-fluid" src="images/headerImg.svg" alt="" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
           
        </div>
    );
};

export default Head;