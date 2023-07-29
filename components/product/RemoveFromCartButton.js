import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { removeProductFromCart } from '../../utils/data/productData';
import { getOpenOrderByUser } from '../../utils/data/orderData';

export default function RemoveFromCartButton({ id }) {
  const { user } = useAuth();
  const [, setOrder] = useState({});

  const removeFromCart = () => {
    getOpenOrderByUser(user.id).then((userOrders) => {
      setOrder(userOrders);
      removeProductFromCart(id);
    });
  };

  return (
    <Button onClick={removeFromCart}>Remove from Cart</Button>
  );
}

RemoveFromCartButton.propTypes = {
  id: PropTypes.number.isRequired,
};
