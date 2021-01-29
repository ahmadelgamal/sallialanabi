const { User } = require('../models');

const userData = [
  {
    "username": "ahmad.el.gamal",
    "email": "a@email.com",
    "password": "test123"
  },
  {
    "username": "may.abdelmohsen",
    "email": "m@email.com",
    "password": "test123"
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;