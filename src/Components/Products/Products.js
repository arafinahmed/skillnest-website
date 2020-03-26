import React from 'react';
import './Products.css'
import ProductCard from '../ProductCard/ProductCard'
import { productData } from '../../FakeData/FakeData';


const Products = () => {
    const data = productData;
    return (
        <div id="products"> 
            <div className="container">
            <div className="content-product">
                <div className="title d-flex flex-column">
                    <div><h1>Products</h1></div>
                    <div className="outer"><div className="inner"></div></div>                   
                    
                </div>
                <div className="content d-flex align-content-start flex-wrap"> 
                    {
                        data.map(pd => <ProductCard data={pd}></ProductCard>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Products;