const express = require('express');

const router = express.Router();

const gradeController = require('../../controllers/grade-controller/grade-controller')

router.get('/grades', gradeController.getAllGrade)

module.exports = router