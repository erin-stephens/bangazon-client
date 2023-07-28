import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Dropdown } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import checkOrder from '../../utils/data/orderData';

export default function OrderCard({ orderObj }) {
  const [openOrders, setOpenOrders] = useState(false);
  const { user } = useAuth();
  const checkOpenOrders = () => {
    const payload = { completed: orderObj.completed };
    checkOrder(orderObj.id, payload).then(setOpenOrders);
  };

  useEffect(() => {
    checkOpenOrders();
  }, []);

  return (
    <Card style={{ width: '18rem' }} className="orderCard">
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>{orderObj.total}</Card.Text>
        <Card.Text>{orderObj.completed}</Card.Text>
        <Dropdown>Drop</Dropdown>
        {orderObj.customer_id === user.id && openOrders ? <Button>Checkout</Button> : ''}
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    completed: PropTypes.bool,
    total: PropTypes.number,
    payment_type: PropTypes.string,
    customer_id: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};
