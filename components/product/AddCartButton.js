import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { createOrder } from '../../utils/data/orderData';

export default function AddCartButton({ productId }) {
  const addToCart = () => {
    const purchase = {
      orderId: '',
      productId,
    };
    createOrder(purchase);
  };

  return (
    <Button onClick={addToCart}>Add To Cart</Button>
  );
}

AddCartButton.propTypes = {
  productId: PropTypes.number.isRequired,
};
