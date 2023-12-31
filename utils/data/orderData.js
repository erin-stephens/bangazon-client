import { clientCredentials } from '../client';

const getOrders = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getUserOrders = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders?customer_id=${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createOrder = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const deleteOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const updateOrder = (order) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${order.id}`, {
    method: 'PUT',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getOrdersProducts = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}/get_products`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getOpenOrderByUser = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${id}/getorder`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getOrders,
  getUserOrders,
  getSingleOrder,
  createOrder,
  deleteOrder,
  updateOrder,
  getOrdersProducts,
  getOpenOrderByUser,
};
