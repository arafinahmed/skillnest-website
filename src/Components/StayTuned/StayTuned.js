import React from 'react';
import './StayTuned.css'
const StayTuned = () => {
    return (
        <div className="container">
            <div className="stay-tunned">
                <div className="stay-tunned-inner">
                <h1>Stay tunned</h1>
                <h6>By registering with us you will receive right in your inbox all new features and updates.</h6>
                <input className="stay-tuneed-inp" type="text" name="" id="" placeholder="Enter your email"/>
                <br/>
                <button className="btn btn-primary btn-lg">Register</button>
                </div>
            </div>
        </div>
    );
};

export default StayTuned;