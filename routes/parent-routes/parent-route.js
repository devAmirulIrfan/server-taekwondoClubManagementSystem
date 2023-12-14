const express = require('express');

const router = express.Router();

const parentController = require('../../controllers/parent-controller/parent-controller')

router.post('/addParent', parentController.addParent)

router.put('/updateParent/:id', parentController.updateParent)

router.get('/getSingleParent/:id', parentController.getSingleParent)

router.get('/getAllParent', parentController.getAllParents)

router.post('/parentLogin', parentController.parentLogin)

module.exports = router