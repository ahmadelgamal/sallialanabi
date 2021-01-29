const router = require('express').Router();
const product_controller = require('../../controllers/productController');
const withAuth = require('../../utils/auth');

router
  .route('/')
  .get(product_controller.product_list) // read all
  .post(withAuth, product_controller.product_create); // create one

router
  .route('/:product_id')
  .get(product_controller.product_detail) //read one by id
  .put(withAuth, product_controller.product_update) //update one by id
  .delete(product_controller.product_delete); //delete one by id

module.exports = router;