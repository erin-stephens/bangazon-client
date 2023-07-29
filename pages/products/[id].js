import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../utils/data/productData';
import AddCartButton from '../../components/product/AddCartButton';

export default function ViewProduct() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProductDetails);
    console.warn(productDetails);
  }, [id]);

  return (
    <div>
      <img src={productDetails.image_url} alt={productDetails.title} />
      <h2>Title: {productDetails.title}</h2>
      <h4>Description: {productDetails.description}</h4>
      <h4>Price: {productDetails.price}</h4>
      <h4>Category: {productDetails.category?.label}</h4>
      <h4>Seller: {productDetails.seller?.first_name} {productDetails.seller?.last_name}</h4>

      <AddCartButton id={id} />

    </div>
  );
}
