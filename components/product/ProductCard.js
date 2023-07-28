import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Dropdown } from 'react-bootstrap';
import { addProductToCart, deleteProduct, removeProductFromCart } from '../../utils/data/productData';

export default function ProductCard({ productObj, onUpdate }) {
  const deleteThisProduct = () => {
    if (window.confirm(`Delete ${productObj.title}?`)) {
      deleteProduct(productObj.id).then(() => onUpdate());
    }
  };
  const add = () => {
    addProductToCart(productObj.id).then(() => onUpdate());
  };
  const remove = () => {
    removeProductFromCart(productObj.id).then(() => onUpdate());
  };
  return (
    <Card style={{ width: '18rem' }} className="productCard">
      <Card.Img variant="top" src={productObj.image_url} />
      <Card.Body>
        <Card.Title>{productObj.title}</Card.Title>
        <Card.Text>{productObj.price}</Card.Text>
        <Card.Text>{productObj.seller.first_name}</Card.Text>
        <Dropdown>
          <Dropdown.Toggle className="dropdownBtn">
            Options
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href={`/products/${productObj.id}`}>View Details</Dropdown.Item>
            <Dropdown.Item href={`/products/edit/${productObj.id}`}>Edit</Dropdown.Item>
            <Dropdown.Item onClick={deleteThisProduct}>Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {productObj.added ? <Button onClick={remove}>Remove from Cart</Button> : <Button onClick={add}>Add to Cart</Button>}
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    seller: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
    }),
    image_url: PropTypes.string,
    added: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
