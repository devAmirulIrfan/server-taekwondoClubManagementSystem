const express = require('express');
const authenticateJWT = require('../../authentication/admin-authentication');

const router = express.Router();

const studentController = require('../../controllers/student-controller/student-controller')

router.get('/getAllStudent', studentController.getAllStudent)

router.get('/getSingleStudent/:id', studentController.getSingleStudent)

router.post('/addStudent',authenticateJWT, studentController.addStudent)

router.put('/updateStudent/:id',authenticateJWT, studentController.updateStudent)

module.exports = router