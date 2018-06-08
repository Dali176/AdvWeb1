const express = require('express');
const aboutController = require('../controllers/aboutController');

const router = express.Router();

/* GET home page. */
router.get('/', aboutController.homePage);

module.exports = router;