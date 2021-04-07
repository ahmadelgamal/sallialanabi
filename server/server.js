require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const routes = require('./routes');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 4000;

const sess = {
  secret: process.env.AUTH_SECRET,
  cookie: {},
  // cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(routes); // routes comes after bodyParser and after session

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
