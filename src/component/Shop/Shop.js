import React, { useEffect, useState } from "react";
import "./shop.css";
import fakeData from "../../fakeData/";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    console.log(cartProduct);
    setCart(cartProduct);
  }, []);

  const addProduct = (product) => {
    let newCart = [...cart];

    if (cart.indexOf(product) === -1) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      console.log("Objecty Exist..");
      newCart[cart.indexOf(product)].quantity++;
    }
    // console.log("---------");
    // console.log(cart);

    setCart(newCart);
    // console.log(cart);
    // const count = newCart.filter((item) => item.key === product.key);
    addToDatabaseCart(product.key, 1);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {first10.map((item) => (
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
