const express = require('express');

const router = express.Router();

const sessionController = require('../../controllers/session-controller/session-controller')

router.get('/getAllSession', sessionController.getAllSession)

module.exports = router