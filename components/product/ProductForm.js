import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createProduct, updateProduct, getCategories } from '../../utils/data/productData';

const initialState = {
  title: '',
  description: '',
  quantity: 0,
  price: 0,
  categoryId: '',
  seller: '',
  imageUrl: '',
};

export default function ProductForm({ obj }) {
  const [categories, setCategories] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getCategories().then(setCategories);
    if (obj.id) {
      setCurrentProduct({
        id: obj.id,
        title: obj.title,
        description: obj.description,
        quantity: obj.quantity,
        price: obj.price,
        categoryId: obj.category_id?.id,
        imageUrl: obj.image_url,
      });
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      const productUpdate = {
        id: obj.id,
        title: currentProduct.title,
        description: currentProduct.description,
        quantity: currentProduct.quantity,
        price: currentProduct.price,
        categoryId: currentProduct.categoryId,
        userId: user.uid,
        imageUrl: currentProduct.imageUrl,
      };
      updateProduct(productUpdate).then(() => router.push('/products'));
    } else {
      const product = {
        title: currentProduct.title,
        description: currentProduct.description,
        quantity: currentProduct.quantity,
        price: currentProduct.price,
        categoryId: currentProduct.categoryId,
        userId: user.uid,
        imageUrl: currentProduct.imageUrl,
      };
      createProduct(product).then(() => router.push('/products'));
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" required value={currentProduct.title} onChange={handleChange} />
        </Form.Group>
        <FloatingLabel controlId="floatingInput2" label="Description" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter description"
            name="description"
            value={currentProduct.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput3" label="quantity" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Enter Quantity"
            name="quantity"
            value={currentProduct.quantity}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput3" label="price" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={currentProduct.price}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelect">
          <Form.Select
            aria-label="category"
            name="categoryId"
            onChange={handleChange}
            className="mb-3"
            value={currentProduct.categoryId}
            required
          >
            <option value="">Select a Category</option>
            {
                categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.label}
                  </option>
                ))
              }
          </Form.Select>
        </FloatingLabel>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

ProductForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    category_id: PropTypes.shape({
      id: PropTypes.number,
    }),
    seller: PropTypes.string,
    image_url: PropTypes.string,
  }),
};

ProductForm.defaultProps = {
  obj: initialState,
};
