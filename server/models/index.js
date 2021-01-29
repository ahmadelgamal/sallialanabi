const Action = require('./Action');
const Admin = require('./Admin');
const Form = require('./Form');
// const Product = require('./Product');
const User = require('./User');

// Buyer.hasMany(Order, {
//   foreignKey: 'buyer_id'
// });

// Seller.hasMany(Product, {
//   foreignKey: 'seller_id'
// });

// Order.belongsTo(Buyer, {
//   foreignKey: 'buyer_id'
// });

// Order.belongsTo(Product, {
//   foreignKey: 'product_id'
// });

// Product.belongsTo(Seller, {
//   foreignKey: 'seller_id'
// });

// Product.belongsTo(Buyer, {
//   foreignKey: 'buyer_id'
// });

module.exports = { Action, Admin, Form, User, Form };