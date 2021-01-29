// const { Buyer, Product } = require('../models');
const Action = require('../models/Action');

exports.action_create = (req, res) => {
  console.log('=============== CREATE One Action ===============');
  Action
    .create({
      name: req.body.name,
      description: req.body.description
    })
    .then(action => res.json(action))
    .catch(error => res.status(500).json(error));
};

exports.action_list = (req, res) => {
  console.log('=============== READ All Actions ===============');
  Action
    .findAll()
    .then(actions => res.json(actions))
    .catch(error => res.status(500).json(error));
};

exports.action_detail = (req, res) => {
  console.log('=============== READ Action by ID ===============');
  Action.findOne({
    where: { id: req.params.action_id },
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
    .then(action => {
      if (!action) res.status(404).json({ message: "No action found with this id" });
      else res.json(action);
    })
    .catch(error => res.status(500).json(error));
};

exports.action_update = (req, res) => {
  console.log('=============== UPDATE Action by ID ===============');
  Action.update(req.body, {
    where: { id: req.params.action_id },
    individualHooks: true
  })
    .then(dbArray => {
      console.log(dbArray);
      if (dbArray[1].length === 0) res.json({ message: "No action found with this id" });
      else res.json(dbArray[1][0]);
    })
    .catch(error => res.status(500).json(error));
};

exports.action_delete = (req, res) => {
  console.log('=============== DELETE Action by ID ===============');
  Action.destroy({
    where: { id: req.params.action_id },
    individualHooks: true
  })
    .then(dbRes => {
      if (!dbRes) res.status(404).json({ message: "No action found with this id" });
      else res.json({ message: "Action deleted successfully" });
    })
    .catch(error => res.status(500).json(error));
};