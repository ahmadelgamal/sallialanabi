const withAuth = (req, res, next) => {
  if (!req.session.buyer_id) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;