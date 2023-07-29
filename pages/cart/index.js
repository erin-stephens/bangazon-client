import React, { useState, useEffect } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getOpenOrderByUser, getOrdersProducts } from '../../utils/data/orderData';
import OrderProductCard from '../../components/orderProduct/OrderProductCard';
import CartCheckoutForm from '../../components/cart/CartCheckoutForm';

export default function OrderIndex() {
  const [orders, setOrders] = useState({});
  const [orderProducts, setOrderProducts] = useState([]);
  const { user } = useAuth();

  const getOpenOrders = async () => {
    const userOrders = await getOpenOrderByUser(user.id);
    setOrders(userOrders);
    console.warn(userOrders);
    console.warn(userOrders.id);
  };

  const getProductsByOrder = async () => {
    const products = await getOrdersProducts(orders.id);
    setOrderProducts(products);
    console.warn(products);
  };

  useEffect(() => {
    getOpenOrders();
    getProductsByOrder();
  }, [user.id, orders.id]);

  return (
    <div>
      <h1>Orders</h1>
      <h1>Total: {orders.total} </h1>
      <CartCheckoutForm obj={orders} />
      <div>
        {orderProducts.map((orderProduct) => (
          <section key={`orderProduct--${orderProduct.id}`} className="orderProducts">
            <OrderProductCard orderProductObj={orderProduct} onUpdate={getProductsByOrder} />
          </section>
        ))}
      </div>
    </div>
  );
}
