import React from 'react';

const AddToCartButton = ({ product, onAddToCart }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => onAddToCart(product)}
      
    >
      SEPETE EKLE
    </button>
  );
};

export default AddToCartButton;