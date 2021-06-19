import React from 'react';
import './Product.css';

function Product({item}) {
    return (
        <div className="product">
            <img src={item.image} alt="" />
            <div className="product__footer">
                <h4>{item.name}</h4>
                <p>Rs. {item.price}</p>
                <span>Size: {item.size}</span>
            </div>
        </div>
    )
}

export default Product;
