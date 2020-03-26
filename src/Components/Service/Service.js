import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { serviceData } from '../../FakeData/FakeData';

const Service = () => {
    const data = serviceData;
    return (
        <div>
            <div id="services"> 
            <div className="container">
            <div className="content-product">
                <div className="title d-flex flex-column">
                    <div><h1>Services</h1></div>
                    <div className="outer"><div className="inner"></div></div>                   
                    
                </div>
                <div className="content d-flex align-content-start flex-wrap"> 
                    {
                        data.map(pd => <ServiceCard data={pd}></ServiceCard>)
                        
                    }
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Service