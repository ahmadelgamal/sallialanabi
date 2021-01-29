const { Product } = require('../models');

const productData = [
  {
    "name": "pipe",
    "description": "plumbing",
    "seller_id": 2
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;