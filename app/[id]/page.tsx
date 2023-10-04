import React from "react";

const Product = ({ params }: any) => {
  const { id } = params;
  console.log("🚀 ~ file: page.tsx:5 ~ Product ~ id:", id);

  return <div>Product</div>;
};

export default Product;
