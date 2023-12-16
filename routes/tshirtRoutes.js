const express = require('express');
const tshirtController = require('../controllers/tshirtCOntroller');
const authenticateJWT = require('../authentication/admin-authentication');

const router = express.Router();

router.get('/tshirt',authenticateJWT, tshirtController.getTshirt);
router.post('/insertTshirt', tshirtController.insertTshirt);
router.put('/updateTshirt/:id', tshirtController.updateTshirt);
router.delete('/deleteTshirt/:id', tshirtController.deleteTshirt);

module.exports = router;
