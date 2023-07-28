import React from 'react';
import ProductForm from '../../components/product/ProductForm';
import { useAuth } from '../../utils/context/authContext';

export default function NewProduct() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Add a New Product</h1>
      <ProductForm user={user} />
    </div>
  );
}
