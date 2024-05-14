import React from "react";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="Links" to="/">Shop</Link>
          </li>
          <Link className="Links" to="/cart">
            <FaShoppingCart />
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Header;
