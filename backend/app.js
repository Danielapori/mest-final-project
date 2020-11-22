const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./helpers/config');


// Import Routes Here 
const userRoute = require('./controllers/user');
const attendanceRoute = require('./controllers/attendance');


app = express();
app.use(bodyParser.json());
app.use(cors());


// Make connection to the database
mongoose.connect(config.MONGODB_URL, config.MONGODB_OPTIONS)
.then(()=> {
    console.log("Conneciton successfull")
})



app.get('/', async (request, response)=> {
    response.send("Hello world");
})
app.use('/api/users', userRoute);
app.use('/api/attendance', attendanceRoute);


module.exports = app;