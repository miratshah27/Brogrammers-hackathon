const CollegeDetails = require('../models/details');

exports.getCollegeDetails = async (req, res, next) => {
    try{
        const details = await CollegeDetails.find();

        return res.status(200).json({
            success: true,
            length: details.length,
            data: details
        });
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