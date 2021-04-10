import React, { useEffect, useState } from "react";
import "./shop.css";

import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    if (products.length) {
      const cartProduct = productKeys.map((key) => {
        const product = products.find((pd) => pd.key === key);
        product.quantity = savedCart[key];
        return product;
      });
      setCart(cartProduct);
    }
  }, [products]);

  const addProduct = (product) => {
    let newCart = [...cart];

    if (cart.indexOf(product) === -1) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      newCart[cart.indexOf(product)].quantity++;
    }
    setCart(newCart);
    addToDatabaseCart(product.key, 1);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((item) => (
          <Product key={item.key} showAddtoCard={true} product={item} handleAddProduct={addProduct}></Product>
        ))}
      </div>

      <div className='cart-container'>
        <Cart cart={cart}>
          <Link to='/review'>
            <button className='cartBtn'>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
