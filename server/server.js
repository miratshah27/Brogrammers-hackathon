const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env'});
connectDB();

const details = require('./routes/collegeroutes')

const app = express();
app.use(express.json());
app.get('/',(req,res)=>res.send('Hello,World'))

app.use('/api/collegeAllDetails', details);

app.listen(5000, console.log('Server running on 5000'));