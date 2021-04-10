import React, { useContext } from "react";
import { userContext } from "../../App";
import { getDatabaseCart } from "../../utilities/databaseManager";

const Shipment = () => {
  const [loggedinUser, setLoggedinUser] = useContext(userContext);
  //console.log(loggedinUser);
  const confirmOrder = () => {
    const ShippingAddress = document.getElementById("addressInput").value;
    const payment = document.getElementById("radioCashOnDelivery").checked ? "Cash On Delivery" : "Mobile Banking";
    const orderItem = getDatabaseCart();
    const order = {
      ...loggedinUser,
      payment,
      ShippingAddress,
      Items: orderItem,
    };

    fetch("http://localhost:5000/placeOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(order);
  };
  return (
    <div>
      <h5 className='display-6'>Confirm Order</h5>
      <div class='mb-3'>
        <label for='addressInput' className='form-label'>
          Shipping Address
        </label>
        <textarea className='form-control' id='addressInput' rows='3'></textarea>
      </div>

      <div>
        <div className='form-check'>
          <input className='form-check-input' type='radio' name='PaymentMethod' id='radioCashOnDelivery' defaultValue='Cash On Delivery' defaultChecked />
          <label className='radioCashOnDelivery' htmlFor='radioCashOnDelivery'>
            Cash On Delivery
          </label>
        </div>
        <div className='form-check'>
          <input className='form-check-input' type='radio' name='PaymentMethod' id='radioMobileBanking' defaultValue='Mobile Banking' />
          <label className='form-check-label' htmlFor='radioMobileBanking'>
            Mobile Banking
          </label>
        </div>
      </div>
      <button className='btn btn-success' onClick={confirmOrder}>
        Confirm Order
      </button>
    </div>
  );
};

export default Shipment;
