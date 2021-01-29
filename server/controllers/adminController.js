const Admin = require('../models/Admin');

exports.admin_create = (req, res) => {
  console.log('=============== CREATE Admin ===============');
  Admin
    .create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(admin => {
      req.session.save(() => {
        req.session.admin_id = admin.id;
        req.session.username = admin.username;
        req.session.loggedIn = true;

        res.json(admin);
      });
    })
    .catch(error => res.status(500).json(error));
};

exports.admin_list = (req, res) => {
  console.log('=============== READ All Admin ===============');
  Admin
    .findAll({ attributes: { exclude: ['password'] } })
    .then(admins => res.json(admins))
    .catch(error => res.status(500).json(error));
};

exports.admin_detail = (req, res) => {
  console.log('=============== READ Admin by ID ===============');
  Admin
    .findOne({
      where: { id: req.params.admin_id },
      attributes: { exclude: ['password'] },
    })
    .then(admin => {
      if (!admin) res.status(404).json({ message: "No Admin found with this id" });
      else res.json(admin);
    })
    .catch(error => res.status(500).json(error));
};

exports.admin_update = (req, res) => {
  console.log('=============== UPDATE Admin by ID ===============');
  Admin
    .update(req.body, {
      individualHooks: true,
      where: { id: req.params.admin_id }
    })
    .then(dbArray => {
      if (dbArray[0] === 0) res.status(404).json({ message: "No Admin found with this id" })
      else res.json(dbArray[1][0]);
    })
    .catch(error => res.status(500).json(error));
};

exports.admin_login = (req, res) => {
  console.log('=============== LOGIN Admin ===============');
  Admin
    .findOne({ where: { username: req.body.username } })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'Username does not exist!' });
        return;
      }

      const validPassword = dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }

      req.session.save(() => {
        req.session.admin_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
};

exports.admin_logout = (req, res) => {
  console.log('=============== LOGOUT Admin ===============');
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
};

exports.admin_delete = (req, res) => {
  console.log('=============== DELETE Admin by ID ===============');
  Admin
    .destroy({
      where: { id: req.params.admin_id },
      individualHooks: true
    })
    .then(dbRes => {
      if (!dbRes) res.status(404).json({ message: "No Admin found with this id" });
      else res.json({ message: "Admin deleted successfully" });
    })
    .catch(error => res.status(500).json(error));
};