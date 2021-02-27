import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  console.log(props);
  return (
    <div className='product'>
      <div>
        <img src={img} alt='' />
      </div>

      <div>
        <h4 className='product-name'>Name: {name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>$ {price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock</small>
        </p>
        <button className='cartBtn' onClick={() => props.handleAddProduct(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          &nbsp;Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
