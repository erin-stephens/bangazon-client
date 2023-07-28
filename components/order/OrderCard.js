import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Dropdown } from 'react-bootstrap';

export default function OrderCard({ orderObj }) {
  return (
    <Card style={{ width: '18rem' }} className="orderCard">
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>{orderObj.total}</Card.Text>
        <Card.Text>{orderObj.completed}</Card.Text>
        <Dropdown>Drop</Dropdown>
        <Button>Checkout</Button>
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
