import React from "react";
import "./home.css";

function Home() {
  const products = [
    {
      id: 1,
      productName: "IPhone",
      price: 199999,
      img: "https://github.com/machadop1407/shopping-cart-react/blob/main/src/assets/products/1.png?raw=true",
    },
    {
      id: 2,
      productName: "Laptop",
      price: 49999,
      img: "https://github.com/machadop1407/shopping-cart-react/blob/main/src/assets/products/2.png?raw=true",
    },
    {
      id: 3,
      productName: "Camera",
      price: 5499,
      img: "https://github.com/machadop1407/shopping-cart-react/blob/main/src/assets/products/3.png?raw=true",
    },
    {
      id: 4,
      productName: "Shirt",
      price: 499,
      img: "https://github.com/machadop1407/shopping-cart-react/blob/main/src/assets/products/4.png?raw=true",
    },
    {
      id: 5,
      productName: "T-Shirt",
      price: 599,
      img: "https://raw.githubusercontent.com/machadop1407/shopping-cart-react/main/src/assets/products/6.webp",
    },
    {
      id: 6,
      productName: "T-Shirt",
      price: 449,
      img: "https://raw.githubusercontent.com/machadop1407/shopping-cart-react/main/src/assets/products/7.webp",
    },
  ];

  return (
    <>
      <div className="box">
        {products.map((value) => {
          return (
            <div className="productCard" key={value.id}>
              <img src={value.img} alt="" />
              <div className="productNameAndPrice">
                <p>{value.productName}</p>
                <p> Rs.{value.price}</p>
              </div>
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
