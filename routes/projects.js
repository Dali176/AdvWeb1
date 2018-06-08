const express = require('express');
const projectController = require('../controllers/projectController');

const router = express.Router();

/* GET home page. */
router.get('/', projectController.homePage);

module.exports = router;