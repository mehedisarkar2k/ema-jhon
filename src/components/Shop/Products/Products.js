import React from "react";
import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <Product key={product.key} product={product} />
      ))}
    </div>
  );
};

export default Products;
