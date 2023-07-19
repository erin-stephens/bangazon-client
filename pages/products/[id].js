import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../utils/data/productData';

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
      <h2>{productDetails.title}</h2>
      <h4>{productDetails.description}</h4>
      <h4>{productDetails.price}</h4>
      <h4>{productDetails.category}</h4>

    </div>
  );
}
