import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleProduct } from '../../../utils/data/productData';
import ProductForm from '../../../components/product/ProductForm';

export default function EditProduct() {
  const [editProduct, setEditProduct] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setEditProduct);
  }, [id]);

  return (
    <ProductForm obj={editProduct} />
  );
}
