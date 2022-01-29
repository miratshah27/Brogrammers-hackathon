const express = require('express');
const router = express.Router();
const { getCollegeDetails, addDetails } = require('../controllers/controllers')

router.route('/')
    .get(getCollegeDetails)
    .post(addDetails);

module.exports = router;