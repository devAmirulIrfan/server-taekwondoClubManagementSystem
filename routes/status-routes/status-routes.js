const express = require('express');

const router = express.Router();

const statusController = require('../../controllers/status-controller/status-controller')

router.get('/getAllStatus', statusController.getAllStatus )

module.exports = router