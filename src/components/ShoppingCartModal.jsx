import React from "react";
import { FaTimes } from "react-icons/fa";

const ShoppingCartModal = ({ onClose, onGoToCart }) => {
  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Sepetiniz</h2>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <hr className="modal-divider" />
      <div className="cart-items">
        <div className="cart-item">
          <span>Ürün Adı</span>
          <span>Miktar</span>
          <span>Fiyat</span>
        </div>
        {/* Sepete git düğmesi */}
        
        {/* Sepet içeriği */}
        <div className="cart-item">
          <span>Ürün 1</span>
          <span>1</span>
          <span>10 TL</span>
        </div>
        <div className="cart-item">
          <span>Ürün 2</span>
          <span>2</span>
          <span>20 TL</span>
        </div>
      </div>
      <button className="go-to-cart-button" onClick={onGoToCart}>
          Sepete git
        </button>
    </div>
    
  );
};

export default ShoppingCartModal;