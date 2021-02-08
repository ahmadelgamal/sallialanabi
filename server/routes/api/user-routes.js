const router = require('express').Router();
const user_controller = require('../../controllers/userController');

router
  .get('/', user_controller.user_list) // read all

router
  .post('/register', user_controller.user_create); // create one

router
  .post('/login', user_controller.user_login);

router
  .post('/logout', user_controller.user_logout);

router
  .route('/:user_id')
  .get(user_controller.user_detail) //read one by id
  .put(user_controller.user_update) //update one by id
  .delete(user_controller.user_delete); //delete one by id

module.exports = router;