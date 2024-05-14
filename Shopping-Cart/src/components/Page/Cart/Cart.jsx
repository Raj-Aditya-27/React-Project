import React, { useContext } from "react";
import { products } from "../Home/Home";
import { ShopContext } from "../../../context/ShopContext";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const navigate=useNavigate();

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * iteminfo.price;
      }
    }
    return totalAmount;
  };

  return (
    <>
      <div className="cart">
        <h1>Your Cart Items</h1>
        {products.map((product) => {
          if (cartItems[product.id] != 0) {
            return (
              <>
                <div className="cartItemsBox">
                  <img src={product.img} alt="" />
                  <div className="productNameAndPrice">
                    <p>{product.productName}</p>
                    <p> Rs.{product.price}</p>
                    <div className="countHandler">
                      <button
                        onClick={() => {
                          removeFromCart(product.id);
                        }}
                      >
                        -
                      </button>
                      <p>{cartItems[product.id]}</p>
                      <button onClick={() => addToCart(product.id)}>+</button>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
        {getTotalCartAmount() > 0 ? (
          <div className="footer">
            <p>Subtotal: Rs.{getTotalCartAmount()}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
          </div>
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </>
  );
}

export default Cart;
