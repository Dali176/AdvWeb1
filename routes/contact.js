const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

/* GET home page. */
router.get('/', contactController.homePage);

module.exports = router;