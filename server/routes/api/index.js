const router = require('express').Router();

const actionRoutes = require('./action-routes');
const adminRoutes = require('./admin-routes');
const formRoutes = require('./form-routes');
const userRoutes = require('./user-routes');
// const productRoutes = require('./product-routes');

router.use('/actions', actionRoutes);
router.use('/admin', adminRoutes);
router.use('/forms', formRoutes);
// router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;