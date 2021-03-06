import React, { useState } from "react";
import "./shop.css";
import fakeData from "../../fakeData/";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const count = newCart.filter((item) => item.key === product.key);
    addToDatabaseCart(product.key, count.length);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {first10.map((item) => (
          <Product key={item.key} showAddtoCard={true} product={item} handleAddProduct={addProduct}></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
