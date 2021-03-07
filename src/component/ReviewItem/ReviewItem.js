import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = (props) => {
  const { img, name, price, key, quantity } = props.product;
  return (
    <div className='product card'>
      <div className='me-3'>
        <img src={img} alt='' />
      </div>
      <div>
        <h6 className='product-name'>{name}</h6>
        <p>
          <small>Quantity: {quantity}</small>
        </p>
        <p>
          <small> Unite Price: {price} $</small>
        </p>
        <p>
          <small> Total Price: {price * quantity} $</small>
        </p>

        <button className='cartBtn' onClick={() => props.removeProduct(key)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          &nbsp;Remove Item
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
