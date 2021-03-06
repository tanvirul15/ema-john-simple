import React from "react";
import { useParams } from "react-router";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetails = () => {
  const { productKey } = useParams();
  const product = fakeData.find((data) => data.key === productKey);

  console.log(product);
  return (
    <div>
      <Product showAddtoCard={false} key={product.key} product={product} handleAddProduct=""></Product>
    </div>
  );
};

export default ProductDetails;
<h2>Product Details Comming Soon..</h2>;
