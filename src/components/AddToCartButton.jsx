import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartModal from './ShoppingCartModal';

const AddToCartButton = ({ product, onAddToCart }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();

  const openCartModal = () => {
    setCartOpen(true);
    onAddToCart(product);
  };

  const closeCartModal = () => {
    setCartOpen(false);
  };

  const handleClick = () => {
    openCartModal();
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        SEPETE EKLE
      </button>
      {cartOpen && <ShoppingCartModal onClose={closeCartModal} />}
    </>
  );
};

export default AddToCartButton;
