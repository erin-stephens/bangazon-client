import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { addProductToCart } from '../../utils/data/productData';
import { getOpenOrderByUser } from '../../utils/data/orderData';

export default function AddCartButton({ id }) {
  const { user } = useAuth();
  const [, setOrder] = useState({});

  const addToCart = () => {
    getOpenOrderByUser(user.id).then((userOrders) => {
      setOrder(userOrders);
      const payload = {
        orderId: Number(userOrders.id),
        productId: Number(id),
      };
      addProductToCart(id, payload);
    });
  };

  return (
    <Button onClick={addToCart}>Add To Cart</Button>
  );
}

AddCartButton.propTypes = {
  id: PropTypes.number.isRequired,
};
