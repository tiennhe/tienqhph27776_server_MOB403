const express = require('express');
const router =express.Router();
const studentController = require('./../controller/studentController');
router.get('/student' , studentController.index);
router.post('/addstudent' , studentController.add);
router.put('/edit/:id' , studentController.edit);
router.delete('/:id' , studentController.delete);


module.exports = router