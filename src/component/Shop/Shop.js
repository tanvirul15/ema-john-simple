import React, { useState } from "react";
import "./shop.css";
import fakeData from "../../fakeData/";
import Product from "../Product/Product";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  console.log(first10);
  const [products, setProducts] = useState(first10);
  const [cart, Setcart] = useState([]);

  const addProduct = () => {
    console.log("Product Added..!");
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {first10.map((item) => (
          <Product product={item} handleAddProduct={addProduct}></Product>
        ))}
      </div>
      <div className='cart-container'>
        <h1>Cart Length: {cart.length}</h1>
      </div>
    </div>
  );
};

export default Shop;
