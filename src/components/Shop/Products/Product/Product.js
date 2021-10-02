import React from "react";

const Product = ({ product }) => {
  const { img, name, category, wholePrice, priceFraction, stock } = product;
  return (
    <div className="flex border border-blue-700">
      <div className="">
        <img src={img} alt="" />
      </div>

      <div className="">
        <h2>{name}</h2>

        <div className="flex">
          <div className="">
            <h5>Category: {category}</h5>
            <h6>Price: {wholePrice + (priceFraction / 2).toFixed(2)}</h6>
            <p>Only {stock} left in stock - order soon!</p>
            <button>Add to cart</button>
          </div>
          <div className="">
            <p>* * * * *</p>

            <div className="">
              <h5>Features</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
