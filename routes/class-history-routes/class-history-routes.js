const express = require('express');

const router = express.Router();

const classHistoryController = require('../../controllers/class-history-controller/class-history-controller')

router.get('/classHistory', classHistoryController.getAllClassHistory)

router.post('/addClassHistory', classHistoryController.addClass)

module.exports = router