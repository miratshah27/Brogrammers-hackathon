const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

    
dotenv.config({ path: './config/config.env'});
connectDB();

const details = require('./routes/collegeroutes')

app.use(express.json());



app.use('/api/collegeAllDetails', details);

app.listen(5000, console.log('Server running on 5000'));