const seedUsers = require('./user-seeds');
const seedProducts = require('./product-seeds');
const seedOrders = require('./order-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('=============== SEED ALL ===============');
  
  console.log('=============== SEEDS USERS ===============');
  await seedUsers();
  
  console.log('=============== SEEDS PRODUCTSS ===============');
  await seedProducts();
  
  console.log('=============== SEEDS ORDERS ===============');
  await seedOrders();

  process.exit(0);
}

seedAll();