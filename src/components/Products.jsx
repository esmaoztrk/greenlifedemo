import React from "react";
import Slideshow from "./Slideshow";
import { images6} from "./Images";
import ProductList from "./Productlist";
import { products } from "./ProductsData";


const Products = () => {
  return (
    <div className="Products">
     
      <Slideshow images={images6} />
      <ProductList products={products} />
    
    </div>
  );
};

export default Products;
