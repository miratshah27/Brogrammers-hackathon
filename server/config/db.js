const mongoose = require('mongoose');
const dotenv = require("dotenv");

const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://mirat:miratshah@collegedetails.zvxna.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log(`MongoDB connection : ${conn.connection.host}`);
    }catch(err){
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;