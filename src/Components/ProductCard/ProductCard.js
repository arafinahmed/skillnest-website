import React from 'react';
import './ProductCard.css'
const ProductCard = (props) => {
    const data = props.data;
    const {productTitle, image, shortDescription} = data;
    return (
        <div className="col-md-4">
            <div className="product-card">
            <div className="outer-image">
                <div className="product-image">
                    <img className="img-fluid" src={image} alt="" />
                </div>
            </div>
            <div className="product-title">
                <h3>{productTitle}</h3>
            </div>
            <div className="product-description">
                <p>{shortDescription}</p>
            </div>
            <div>
                <p> <button className="product-button">Details</button> </p>
            </div>
        </div>
        </div>


    );
};

export default ProductCard;