const xpress = require('express');

const professionalController = require('../controllers/professional');

const router = xpress.Router();

// GET /feed/posts
router.get('/', professionalController.getData);
data = router;

module.exports = router, data;