const router = require('express').Router();
const admin_controller = require('../../controllers/adminController');

router
  .route('/')
  .get(admin_controller.admin_list) // read all
  .post(admin_controller.admin_create); // create one

router
  .route('/:admin_id')
  .get(admin_controller.admin_detail) //read one by id
  .put(admin_controller.admin_update) //update one by id
  .delete(admin_controller.admin_delete); //delete one by id

router
  .post('/login', admin_controller.admin_login);

router
  .post('/logout', admin_controller.admin_logout);

module.exports = router;