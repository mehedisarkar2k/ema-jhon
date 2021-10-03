import React from "react";

const Product = ({ product }) => {
  const { img, name, category, wholePrice, priceFraction, stock, features } =
    product;

  return (
    <div className="mb-4 rounded-md p-4 flex shadow-lg">
      <div className="w-1/3 border-r border-gray-300 p-4">
        <img className="w-full object-cover hover:scale-125" src={img} alt="" />
      </div>

      <div className="w-2/3 text-left p-4 px-8">
        <h2 className="text-2xl font-black">{name}</h2>

        <div className="flex mt-5">
          <div className="w-1/2">
            <h5>Category: {category}</h5>
            <h6>
              Price:{" "}
              {(parseInt(wholePrice) + parseFloat(priceFraction) / 100).toFixed(
                2
              )}
            </h6>
            <small className="text-yellow-600 font-black text-sm">
              Only {stock} left in stock - order soon!
            </small>
            <button className="px-4 py-1 bg-yellow-500 rounded-xl text-xl mt-4 hover:bg-yellow-400 hover:shadow-lg transition active:bg-yellow-600">
              Add to cart
            </button>
          </div>
          <div className="w-1/2 ml-4">
            <p className="text-yellow-500 text-xl font-black">* * * * *</p>

            <div className="">
              <h5 className="text-xl text-yellow-500 underline">Features</h5>
              {features.map((ft, index) => (
                <small key={index}>
                  <li>
                    {ft["description"]}: <strong>{ft["value"]}</strong>
                  </li>
                </small>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
