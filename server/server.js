const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./routes');

const sess = {
  secret: 'why do you ask?',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session(sess));
app.use(routes);  //  comes after: app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// turn on connection to db and server
sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log('App listening on port: ', PORT));
  });