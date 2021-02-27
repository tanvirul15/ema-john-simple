import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
  });
  let shippingCost = total > 35 ? 0 : total > 15 ? 4 : total === 0 ? 0 : 6;

  const vat = parseFloat((total * 0.03).toFixed(2));
  let grandTotal = total + shippingCost + vat;

  return (
    <div className='card p-5 m-4 text-center sticky-top'>
      <h4>Order Summary</h4>
      <p>Item Ordered: {cart.length}</p>
      <p>Total Price: {total.toFixed(2)} $</p>
      <p>Shipping cost: {shippingCost.toFixed(2)} $</p>
      <p>Vat: {vat.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
