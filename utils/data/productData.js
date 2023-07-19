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

export { getProducts, getSingleProduct };
