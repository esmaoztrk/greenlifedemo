import React from "react";
import ProductCard from "./Productcard";

const ProductList = ({ products }) => {
  return (
    <div className="category-list-main">
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
