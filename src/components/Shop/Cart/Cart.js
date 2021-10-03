import React from "react";

const Cart = ({ cartItems }) => {
  let totalPrice = 0;
  let shipping = 0;
  let totalItem = 0;

  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
    shipping += item.shipping * item.quantity;
    totalItem += item.quantity;
  });

  return (
    <div className="ml-auto">
      <h2 className="text-2xl font-black text-center">Order Summery</h2>
      <h4 className="text-xl font-black text-center">
        Item order: {totalItem}
      </h4>

      <div className="mx-8 my-4">
        <p className="flex text-base">
          <span>Items price: </span>
          <span className="ml-auto">&#36;{totalPrice.toFixed(2)}</span>
        </p>
        <p className="flex text-base">
          <span>Shipping &amp; Handling: </span>
          <span className="ml-auto">&#36;{shipping.toFixed(2)}</span>
        </p>
        <p className="flex text-base">
          <span>Total before tax: </span>
          <span className="ml-auto">
            &#36;{(totalPrice + shipping).toFixed(2)}
          </span>
        </p>
        <p className="flex text-base">
          <span>Estimated Tax: </span>
          <span className="ml-auto">
            &#36;{((totalPrice + shipping) * 0.2).toFixed(2)}
          </span>
        </p>
      </div>

      <h4 className="text-lg font-black text-center text-red-500">
        Order Total: &#36;
        {(totalPrice + shipping + (totalPrice + shipping) * 0.2).toFixed(2)}
      </h4>

      <button className="px-4 py-1 bg-yellow-500 rounded-xl text-xl mt-4 hover:bg-yellow-400 hover:shadow-lg transition active:bg-yellow-600">
        Review your order
      </button>
    </div>
  );
};

export default Cart;
