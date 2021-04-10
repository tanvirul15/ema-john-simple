import React, { useState } from "react";
import { useParams } from "react-router";

import Product from "../Product/Product";

const ProductDetails = () => {
  const { productKey } = useParams();
  const [product, setProduct] = useState({});

  fetch(`http://localhost:5000/getProductDetails?key=${productKey}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));

  return (
    <div>
      <Product showAddtoCard={false} key={product.key} product={product} handleAddProduct=''></Product>
    </div>
  );
};

export default ProductDetails;
<h2>Product Details Comming Soon..</h2>;
