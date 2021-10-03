import React from "react";
import Product from "./Product/Product";

const Products = ({ products, addToCartHandler }) => {
  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <Product
          key={product.key}
          product={product}
          addToCartHandler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Products;
