const express = require('express');

const router = express.Router();

const centerController = require('../../controllers/center-controller/center-controller')

router.get('/centers', centerController.getAllCenter)

module.exports = router