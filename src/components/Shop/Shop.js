import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="flex w-4/5 mx-auto">
      <div className="w-4/5">
        <Products products={products} />
      </div>

      <div className="w-1/5">
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
