import React, { useEffect, useState } from 'react';
import { getProducts } from '../../utils/data/productData';
import ProductCard from '../../components/product/ProductCard';

export default function ProductsHome() {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    getProducts().then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h2>View All Products</h2>
      {products.map((product) => (
        <section key={`product--${product.id}`} className="products">
          <ProductCard productObj={product} onUpdate={getAllProducts} />
        </section>
      ))}
    </div>
  );
}
