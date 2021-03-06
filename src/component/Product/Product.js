import React from "react";
import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;

  return (
    <div className='product card'>
      <div className='me-3'>
        <img src={img} alt='' />
      </div>

      <div>
        <Link to={"/product/" + key}>
          <h6 className='product-name'>{name}</h6>
        </Link>

        <p>
          <small>by: {seller}</small>
        </p>
        <p>$ {price}</p>
        <p>
          <small>Only {stock} left in stock</small>
        </p>

        {props.showAddtoCard && (
          <button className='cartBtn' onClick={() => props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            &nbsp;Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
