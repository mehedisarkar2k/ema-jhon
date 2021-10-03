import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo.png";

const Header = () => {
  return (
    <div>
      <div className="mx-auto py-2">
        <img className="inline-block h-16" src={Logo} alt="Ema Jhon Logo" />
      </div>

      <nav className="bg-black text-gray-100 flex p-4 px-8 list-none">
        <li>
          <NavLink
            activeClassName="border-b border-yellow-500 text-yellow-500"
            className="hover:text-yellow-500 transition duration-200  text-xl px-4 py-2 "
            to="/shop"
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="border-b border-yellow-500 text-yellow-500"
            className="hover:text-yellow-500 transition duration-200  text-xl px-4 py-2 "
            to="/review"
          >
            Review Order
          </NavLink>
        </li>

        <li>
          <NavLink
            activeClassName="border-b border-yellow-500 text-yellow-500"
            className="hover:text-yellow-500 transition duration-200  text-xl px-4 py-2 "
            to="/about"
          >
            About Us
          </NavLink>
        </li>

        <li className="ml-auto relative">
          <NavLink
            className="hover:text-yellow-500 transition duration-200  text-xl px-4 py-2 "
            to="/review"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </NavLink>
          <span className="absolute -top-2 right-0 h-5 w-5 rounded-full bg-yellow-500 text-white text-xs flex items-center justify-center font-bold">
            0
          </span>
        </li>
      </nav>
    </div>
  );
};

export default Header;
