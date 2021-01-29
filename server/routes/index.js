const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// all routes other than '/api' => error 404
router.use((req, res) => {
  res
    .status(404)
    .send(`<h1 style="color:red;">
             Error 404 <br />
             Page not found <br />
             Please check the requested url.
           </h1>`)
    .end();
});

module.exports = router;