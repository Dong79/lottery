const express = require('express');
const router = express.Router();
const { getHistory } = require('../controllers/HistoryController');

router.get('/', getHistory);

module.exports = router;
