import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { addProductToCart } from '../../utils/data/productData';
import { getUserOrders } from '../../utils/data/orderData';

export default function AddCartButton({ id }) {
  const { user } = useAuth();
  const [order, setOrder] = useState({});

  const addToCart = () => {
    getUserOrders(user.id).then(setOrder);
    const payload = {
      orderId: Number(order.id),
      productId: Number(id),
    };
    addProductToCart(id, payload);
  };

  return (
    <Button onClick={addToCart}>Add To Cart</Button>
  );
}

AddCartButton.propTypes = {
  id: PropTypes.number.isRequired,
};
