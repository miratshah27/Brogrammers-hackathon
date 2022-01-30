const CollegeDetails = require('../models/details');

exports.getAllCollegeDetails = async (req, res, next) => {
    try{
        req.details = await CollegeDetails.find();
        next();
    }catch(err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }

}

exports.addDetails = async (req, res, next) => {
    try {
        const {collegeName, nirf, lat, lon, city, steams, fees, ownership, cutoffRank, campusSize, avgSalary, totalFaculty, photo} = req.body;

        const detail = await CollegeDetails.create(req.body);
        return res.status(201).json({
            success: true,
            data: detail
        });
    } catch (err) {
        console.log(err);
    }
}


exports.getSpecifiedCollege = async(req, res, next) =>{
    try{
        req.details = await CollegeDetails.findOne({id: req.query.id})
        next()
        
    }
    catch(err){
        console.log(err)
    }
}