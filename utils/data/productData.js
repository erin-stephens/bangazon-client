import { clientCredentials } from '../client';

const getProducts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createProduct = (product) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const deleteProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const updateProduct = (product) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${product.id}`, {
    method: 'PUT',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const addProductToCart = (productId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${productId}/addtocart`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const removeProductFromCart = (productId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${productId}/remove`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getCategories = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  addProductToCart,
  removeProductFromCart,
  getCategories,
};
