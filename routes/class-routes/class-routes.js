const express = require('express');

const router = express.Router();

const classController = require('../../controllers/class-controller/class-controller')

router.get('/class', classController.getAllClass)
router.get('/getClassByDayId/:id', classController.getClassByDayId)

module.exports = router