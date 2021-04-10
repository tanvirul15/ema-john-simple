import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  /**
   * ---------------------Variables Declearation
   */
  const [cart, setCart] = useState([]);
  const histry = useHistory();

  /**
   * ---------------------Handeler Method
   */
  const removeProduct = function (productID) {
    const tempCart = cart.filter((cartItem) => cartItem.key !== productID);
    setCart(tempCart);
    removeFromDatabaseCart(productID);
  };

  const handlePlaceOrder = function () {
    histry.push("/shipment");
  };

  /**
   * ---------------------Handeler Method
   */

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    fetch("http://localhost:5000/getCartProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].quantity = savedCart[data[i].key];
        }
        setCart(data);
      });
  }, []);

  /**
   * ---------------------Return
   */
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {cart.map((cartItem) => (
          <ReviewItem key={cartItem.key} product={cartItem} removeProduct={removeProduct}></ReviewItem>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}>
          <button className='cartBtn' onClick={handlePlaceOrder}>
            Ship Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
