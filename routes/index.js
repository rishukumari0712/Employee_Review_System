const express = require('express');
const router = express.Router();
const homeController = require('./../controllers/home_controller');

console.log(`Index Router is loaded!...`);

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/makereview', require('./review'));


module.exports = router;