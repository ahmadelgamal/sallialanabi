const { User } = require('../models');
const Product = require('../models/Product');

exports.product_create = (req, res) => {
  console.log('=============== CREATE One Product ===============');
  Product
    .create({
      name: req.body.name,
      description: req.body.description,
      seller_id: req.body.seller_id
    })
    .then(product => res.json(product))
    .catch(error => res.status(500).json(error));
};

exports.product_list = (req, res) => {
  console.log('=============== READ All Products ===============');
  Product
    .findAll()
    .then(products => res.json(products))
    .catch(error => res.status(500).json(error));
};

exports.product_detail = (req, res) => {
  console.log('=============== READ Product by ID ===============');
  Product.findOne({
    where: { id: req.params.product_id },
    include: [
      {
        model: Seller,
        attributes: ['id', 'username']
      }
    ]
  })
    .then(product => {
      if (!product) res.status(404).json({ message: "No product found with this id" });
      else res.json(product);
    })
    .catch(error => res.status(500).json(error));
};

exports.product_update = (req, res) => {
  console.log('=============== UPDATE Product by ID ===============');
  Product.update(req.body, {
    where: { id: req.params.product_id },
    individualHooks: true
  })
    .then(dbArray => {
      console.log(dbArray);
      if (dbArray[1].length === 0) res.json({ message: "No product found with this id" });
      else res.json(dbArray[1][0]);
    })
    .catch(error => res.status(500).json(error));
};

exports.product_delete = (req, res) => {
  console.log('=============== DELETE Product by ID ===============');
  Product.destroy({
    where: { id: req.params.product_id },
    individualHooks: true
  })
    .then(dbRes => {
      if (!dbRes) res.status(404).json({ message: "No product found with this id" });
      else res.json({ message: "Product deleted successfully" });
    })
    .catch(error => res.status(500).json(error));
};