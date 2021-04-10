import React from "react";

const Inventory = () => {
  const handleAddProduct = () => {
    //addProduct
    // fetch("http://localhost:5000/addProduct", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // body:
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Inventory Comming Soon..!!</h1>
      <button className='btn btn-success' onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default Inventory;
