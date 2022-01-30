const express = require('express');
const router = express.Router();
const { getAllCollegeDetails, addDetails, getSpecifiedCollege } = require('../controllers/controllers')
const Pagination_Filters_API = require('../controllers/filters')

router.route('/')
    .post(addDetails);


router.get('/', getAllCollegeDetails, (req,res)=>res.render('list', { data:  req.details, error: false }))

router.get('/getSpecifiedCollege' ,getSpecifiedCollege, (req,res)=>res.sendFile('../college.html'))

router.get('/Filters', Pagination_Filters_API)


module.exports = router;