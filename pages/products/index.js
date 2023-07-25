import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getProducts } from '../../utils/data/productData';
import ProductCard from '../../components/product/ProductCard';

export default function ProductsHome() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const getAllProducts = () => {
    getProducts().then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div>
        <Button onClick={() => { router.push('/products/new'); }}> Add a New Product</Button>
      </div>
      <h2>View All Products</h2>
      <div className="productIndex">
        {products.map((product) => (
          <section key={`product--${product.id}`} className="products">
            <ProductCard productObj={product} onUpdate={getAllProducts} />
          </section>
        ))}
      </div>
    </div>
  );
}
