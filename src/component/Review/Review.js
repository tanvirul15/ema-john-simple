import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import fakeData from "../../fakeData";
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from "../../utilities/databaseManager";
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
    // processOrder();
    // setCart([]);
  };

  /**
   * ---------------------Handeler Method
   */

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);

  /**
   * ---------------------Return
   */
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {cart.map((cartItem) => (
          <ReviewItem product={cartItem} removeProduct={removeProduct}></ReviewItem>
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
