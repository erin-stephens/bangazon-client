import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown } from 'react-bootstrap';
import RemoveFromCartButton from '../product/RemoveFromCartButton';

export default function OrderProductCard({ orderProductObj }) {
  return (
    <Card style={{ width: '18rem' }} className="productCard">
      <Card.Img variant="top" src={orderProductObj.product.image_url} />
      <Card.Body>
        <Card.Title>{orderProductObj.product.title}</Card.Title>
        <Card.Text>{orderProductObj.product.price}</Card.Text>
        <Card.Text>{orderProductObj.product.category.label}</Card.Text>
        <Dropdown>
          <Dropdown.Toggle className="dropdownBtn">
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href={`/products/${orderProductObj.product.id}`}>View Details</Dropdown.Item>
            <Dropdown.Item href={`/products/edit/${orderProductObj.product.id}`}>Edit</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <RemoveFromCartButton orderProductObj={orderProductObj.product.id} />
      </Card.Body>
    </Card>
  );
}

OrderProductCard.propTypes = {
  orderProductObj: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.shape({
        label: PropTypes.string,
      }),
      seller: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
      }),
      image_url: PropTypes.string,
      added: PropTypes.bool,
    }),
  }).isRequired,
};
