const User = require('../models/User');
// const { User, Form, Action } = require('../models');

exports.user_list = (req, res) => {
  console.log('=============== READ All Users ===============');
  User
    .findAll({ attributes: { exclude: ['password'] } })
    .then(users => res.json(users))
    .catch(error => res.status(500).json(error));
};

exports.user_create = (req, res) => {
  console.log('=============== CREATE User ===============');
  User
    .create({
      email: req.body.email,
      password: req.body.password
    })
    .then(user => {
      res.json(user);
      console.log('user: ', user);
      console.log('request in controller: ', req);

      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.email = user.email;
        req.session.loggedIn = true;
      });
    })
    .catch(error => {
      console.error('error: ', error);
      res.status(500).json(error)
    });
};

exports.user_login = (req, res) => {
  console.log('=============== LOGIN User ===============');
  User
    .findOne({ where: { email: req.body.email } })
    .then(dbUserData => {
      if (!dbUserData) return res.status(401).json({ message: 'No user with that email address!' });

      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) return res.status(401).json({ message: 'Incorrect password!' });

      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
};

exports.user_logout = (req, res) => {
  console.log('=============== LOGOUT User ===============');
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
};

exports.user_detail = (req, res) => {
  console.log('=============== READ User by ID ===============');
  User
    .findOne({
      where: { id: req.params.user_id },
      attributes: { exclude: ['password'] },
      // include: [
      //   {
      //     model: Order,
      //     attributes: ['id', 'product_id']
      //   }
      // ]
    })
    .then(user => {
      if (!user) res.status(404).json({ message: "No User found with this id" });
      else res.json(user);
    })
    .catch(error => res.status(500).json(error));
};

exports.user_update = (req, res) => {
  console.log('=============== UPDATE User by ID ===============');
  User
    .update(req.body, {
      individualHooks: true,
      where: { id: req.params.user_id }
    })
    .then(dbArray => {
      if (dbArray[0] === 0) res.status(404).json({ message: "No User found with this id" })
      else res.json(dbArray[1][0]);
    })
    .catch(error => res.status(500).json(error));
};

exports.user_delete = (req, res) => {
  console.log('=============== DELETE User by ID ===============');
  User
    .destroy({
      where: { id: req.params.user_id },
      individualHooks: true
    })
    .then(dbRes => {
      if (!dbRes) res.status(404).json({ message: "No User found with this id" });
      else res.json({ message: "User deleted successfully" });
    })
    .catch(error => res.status(500).json(error));
};