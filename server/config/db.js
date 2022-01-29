const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connection : ${conn.connection.host}`);
    }catch{
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;