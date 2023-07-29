import React, { useEffect, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { updateOrder, createOrder } from '../../utils/data/orderData';
import { useAuth } from '../../utils/context/authContext';

export default function CartCheckoutForm({ obj }) {
  const [currentOrder, setCurrentOrder] = useState({});
  const [formInput, setFormInput] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setCurrentOrder({
        total: obj.total,
        paymentType: obj.payment_type,
        completed: obj.completed,
      });
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = {
      id: currentOrder.id,
      customberId: currentOrder.customer_id.id,
      paymentType: currentOrder.payment_type,
      total: currentOrder.total,
      completed: true,
    };
    updateOrder(updatedOrder).then(() => {
      const payload = {
        customerId: user.id,
        paymentType: '',
        total: 0,
        completed: false,
      };
      createOrder(payload);
    });
  };
  return (
    <div>CartCheckoutForm
      <Form onSubmit={handleSubmit}>
        <FloatingLabel label="Payment Type">
          <Form.Select
            aria-label="Payment Type"
            name="paymentType"
            onChange={handleChange}
            className="mb-3"
            value={formInput.paymentType}
            required
          >
            <option value="">Choose a payment type</option>
            <option value="credit">Credit</option>
            <option value="points">Points</option>
            <option value="apple pay">Apple Pay</option>
          </Form.Select>
        </FloatingLabel>
        <Button type="submit">Checkout</Button>
      </Form>
    </div>
  );
}

CartCheckoutForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    customer_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    payment_type: PropTypes.string,
    total: PropTypes.number,
    completed: PropTypes.string,
  }).isRequired,
};
