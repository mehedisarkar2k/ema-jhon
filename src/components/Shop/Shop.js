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
    <div className="flex container mt-4 mx-auto relative">
      <div className="w-3/4 border-r-2 pr-2 border-gray-200">
        <Products products={products} />
      </div>

      <div className="w-1/4 pl-2 sticky top-0">
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
