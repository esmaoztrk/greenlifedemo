import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="product">
            <a href={product.href} className="product-link">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <h3 className='brand-name'>{product.brand}</h3>
                <h2 className="product-name">{product.name}</h2>
                <span className="product-price">{product.price}</span>
                <span className="product-regular-price">{product.regularPrice}</span>
            </a>
        </div>
    );
};

export default Product;
