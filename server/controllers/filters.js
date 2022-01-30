const CollegeDetails = require('../models/details');

const Pagination_Filters_API = async (req, res, next) => {
        const properties = req.query;        

        // database abstraction
        const data = await CollegeDetails.find(
            properties
        );

        return res.status(201).json(data)
}

module.exports =  Pagination_Filters_API;