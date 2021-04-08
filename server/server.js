require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 4000;

const sess = {
  secret: process.env.AUTH_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // httpOnly: true,
    // secure: NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24
  },
  store: new SequelizeStore({
    db: sequelize
  })
};

// const corsObject = {
//   origin: ['http://localhost:3000'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// };

app.disable('x-powered-by'); //hides stack to hackers

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors(corsObject));
app.use(cors());
app.use(session(sess));
app.use(routes);

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
