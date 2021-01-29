const router = require('express').Router();
const form_controller = require('../../controllers/formController');

router
  .route('/')
  .get(form_controller.form_list) // read all
  .post(form_controller.form_create); // create one

router
  .route('/:form_id')
  .get(form_controller.form_detail) //read one by id
  .put(form_controller.form_update) //update one by id
  .delete(form_controller.form_delete); //delete one by id

module.exports = router;