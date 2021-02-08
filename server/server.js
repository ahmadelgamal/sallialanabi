const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./routes');
require('dotenv').config();
const { authMiddleware } = require('./utils/auth');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes); // routes comes after bodyParser

// // comes after serving static assets
// const sess = {
//   secret: process.env.AUTH_SECRET,
//   cookie: { maxAge: 1000 * 60 * 60 * 24 },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };
// app.use(session(sess));

// serves up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// turns on connection to db and server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log('App listening on port: ', PORT));
  });
