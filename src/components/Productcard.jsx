import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRating from "./StarRating";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }) => {
  const calculateDiscountPercent = (regularPrice, price) => {
    if (regularPrice <= 0 || price <= 0) {
      return 0;
    }
  
    const discountAmount = regularPrice - price;
    const discountPercent = (discountAmount / regularPrice) * 100;
  
    return Math.round(discountPercent);
  };

  const discountPercent = calculateDiscountPercent(product.regularPrice, product.price);

  const handleAddToCart = (product) => {
    // Sepete ekleme işlemleri
    console.log(`${product.name} sepete eklendi!`);
  };

  return (
    <Card className="product-card">
      <div className="product-list-item-img">
        <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
      </div>
      <Card.Body>
        <div className="product-list-item-info">
          <div style={{ textAlign: "center" }}>
            <AddToCartButton product={product} onAddToCart={handleAddToCart} />
          </div>
          <Card.Title className="brand-name">{product.brand}</Card.Title>
          <Card.Text className="product-name">{product.name}</Card.Text>
          <Card.Text className="product-ratings">
            <div style={{ fontSize: "20px" }}>
              <StarRating rating={product.rating} />
            </div>
            <span style={{ fontSize: "12px" }}>
              {product.ratings} Değerlendirme
            </span>
          </Card.Text>
          <div className="price-main">
            <div className="discount-percent">%{discountPercent}</div>
            <Card.Text className="discount-price">
              <span style={{fontSize:"16px", textDecoration:"line-through", color:"gray"}}>₺{product.regularPrice}</span>
              <span style={{fontSize:"18px",fontWeight:900}}>₺{product.price}</span>
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
