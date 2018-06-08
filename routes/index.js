const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);

router.get('/about', indexController.about);

router.get('/contact', indexController.contact);

router.get('/projects', indexController.projects);

router.get('/services', indexController.services);

module.exports = router;
