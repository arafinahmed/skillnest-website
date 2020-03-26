import React from 'react';
import './ServiceCard.css'
const ServiceCard = (props) => {
    const data = props.data;
    const {name, image, description} = data;
    return (
        <div  className="col-md-4">          


            <div className="service-card d-flex align-items-center">
            <div>
            <div className="service-product-title">
                    <h6>{name}</h6>
                    </div>
            <div className="d-flex justify-content-between">
                
                <div className="col-md-3 service-image-outer d-flex align-items-center">
                    <div className="service-image">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                </div>
                <div className="col-md-9 service-right service-right-outer">
                <div>
                    <div className="service-product-description">
                        <p>{description}</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;