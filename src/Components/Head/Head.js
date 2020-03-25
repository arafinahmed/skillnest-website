import React from 'react';
import './Head.css';

const Head = () => {
    const tagline = "Tagline will be here Tagline will be here";
    return (
        <div>


            <div className="head-container">

                <div className="navbar-style">
                <nav class="navbar navbar-expand-lg navbar-dark ">
                    <a class="navbar-brand" href="#"><span className="logo-name">SkillNest360</span></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            
                            <a class="nav-item nav-link  " href="#home">Home <span class="sr-only">(current)</span></a>
                            <a class="nav-item nav-link  " href="#about">About</a>
                            <a class="nav-item nav-link  " href="#products">Products</a>
                            <a class="nav-item nav-link  " href="#services">Services</a>
                            <a class="nav-item nav-link  " href="#team">Team</a>
                            <a class="nav-item nav-link  " href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
                </div>




                <div className="container">
                    <div className="d-flex justify-content-around ">
                        <div className="col-md-5 ">
                            <div className="headSide">
                                <div className="col-md-9">

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
                        <div className="col-md-5">
                        <div className="headSide">
                            <img className="img-fluid" src="images/headerImg.svg" alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Head;