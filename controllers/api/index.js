const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/', userRoutes);
router.use('/', projectRoutes);

module.exports = router;
