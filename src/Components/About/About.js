import React from 'react';
import { aboutus } from '../../FakeData/FakeData';
import './About.css'

const About = () => {
    const data = aboutus;
    console.log(data);
    return (
        <div id="about" >
            <div className="container">
                <div className="content-section">
                <div className="title d-flex flex-column">
                    <div><h1>About Us</h1></div>
                    <div className="outer"><div className="inner"></div></div>                   
                    
                </div>
                <div className="content"> 
                    <p> {data}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;