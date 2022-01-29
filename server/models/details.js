const mongoose = require('mongoose');

const CollegeDetailsSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true
    },
    nirf: {
        type: Number,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    steams: {
        type: [String]
    },
    fees: {
        type: Number,
        required: true
    },
    ownership: {
        type: String,
        required: true
    },
    cutoffRank: {
        type: Number,
        required: true
    },
    campusSize: {
        type: Number,
        required: true
    },
    avgSalary: {
        type: Number,
        required: true
    },
    totalFaculty: {
        type: Number,
        required: true
    },
    photo: {
        type: String
    }
});

module.exports = mongoose.model('CollegeDetails', CollegeDetailsSchema);