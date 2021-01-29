const router = require('express').Router();
const action_controller = require('../../controllers/actionController');

router
  .route('/')
  .get(action_controller.action_list) // read all
  .post(action_controller.action_create); // create one

router
  .route('/:action_id')
  .get(action_controller.action_detail) //read one by id
  .put(action_controller.action_update) //update one by id
  .delete(action_controller.action_delete); //delete one by id

module.exports = router;