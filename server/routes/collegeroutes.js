const express = require('express');
const router = express.Router();
const { getAllCollegeDetails, addDetails, getSpecifiedCollege } = require('../controllers/controllers')

router.route('/')
    .post(addDetails);

router.get('/getAllCollegeDetails' ,getAllCollegeDetails)
router.get('/getSpecifiedCollege' ,getSpecifiedCollege)


module.exports = router;