// const { Buyer, Product } = require('../models');
const Form = require('../models/Form');

exports.form_create = (req, res) => {
  console.log('=============== CREATE One Form ===============');
  Form
    .create({
      name: req.body.name,
      description: req.body.description,
    })
    .then(form => res.json(form))
    .catch(error => res.status(500).json(error));
};

exports.form_list = (req, res) => {
  console.log('=============== READ All Forms ===============');
  Form
    .findAll()
    .then(forms => res.json(forms))
    .catch(error => res.status(500).json(error));
};

exports.form_detail = (req, res) => {
  console.log('=============== READ Form by ID ===============');
  Form.findOne({
    where: { id: req.params.form_id },
    // include: [
    //   {
    //     model: Buyer,
    //     attributes: ['username']
    //   },
    //   {
    //     model: Product,
    //     attributes: ['name']
    //   }
    // ]
  })
    .then(form => {
      if (!form) res.status(404).json({ message: "No form found with this id" });
      else res.json(form);
    })
    .catch(error => res.status(500).json(error));
};

exports.form_update = (req, res) => {
  console.log('=============== UPDATE Form by ID ===============');
  Form.update(req.body, {
    where: { id: req.params.form_id },
    individualHooks: true
  })
    .then(dbArray => {
      console.log(dbArray);
      if (dbArray[1].length === 0) res.json({ message: "No form found with this id" });
      else res.json(dbArray[1][0]);
    })
    .catch(error => res.status(500).json(error));
};

exports.form_delete = (req, res) => {
  console.log('=============== DELETE Form by ID ===============');
  Form.destroy({
    where: { id: req.params.form_id },
    individualHooks: true
  })
    .then(dbRes => {
      if (!dbRes) res.status(404).json({ message: "No form found with this id" });
      else res.json({ message: "Form deleted successfully" });
    })
    .catch(error => res.status(500).json(error));
};