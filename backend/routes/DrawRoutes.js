const express = require('express');
const router = express.Router();
const { draw } = require('../controllers/DrawController');

router.post('/', draw);

module.exports = router;
