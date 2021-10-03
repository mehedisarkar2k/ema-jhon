import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCartHandler = (key) => {
    const selectItem = products.filter((product) => product.key === key);

    let tempCart = [...cart];

    for (const item of tempCart) {
      if (key === item.key) {
        item.quantity = parseInt(item.quantity) + 1;
        setCart(tempCart);
        return;
      }
    }

    selectItem[0].quantity = 1;
    tempCart = [...cart, ...selectItem];
    setCart(tempCart);
  };

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
        <Products products={products} addToCartHandler={addToCartHandler} />
      </div>

      <div className="w-1/4 pl-2 sticky top-0">
        <Cart cartItems={cart} />
      </div>
    </div>
  );
};

export default Shop;
