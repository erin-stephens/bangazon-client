import React, { useState, useEffect } from 'react';
import { useAuth } from '../../utils/context/authContext';
import OrderCard from '../../components/order/OrderCard';
import { getUserOrders } from '../../utils/data/orderData';

export default function OrderIndex() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  const getAllOrders = () => {
    getUserOrders(user.id).then(setOrders);
  };

  useEffect(() => {
    getAllOrders();
    console.warn(orders);
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      {orders.map((order) => (
        <section
          key={`order--${order.id}`}
          className="order"
        >
          <OrderCard orderObj={order} onUpdate={getAllOrders} />
        </section>
      ))}
    </div>
  );
}
