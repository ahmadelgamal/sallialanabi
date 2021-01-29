const { Order } = require('../models');

const orderData = [
  {
    "buyer_id": 1,
    "product_id": 11
  }
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;