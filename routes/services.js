const express = require('express');
const servicesController = require('../controllers/servicesController');

const router = express.Router();

/* GET home page. */
router.get('/', servicesController.homePage);

module.exports = router;