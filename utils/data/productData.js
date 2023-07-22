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

const addProductToCart = (productId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${productId}/addtocart`, {
    method: 'POST',
    body: JSON.stringify(),
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

export {
  getProducts,
  getSingleProduct,
  addProductToCart,
  removeProductFromCart,
};
