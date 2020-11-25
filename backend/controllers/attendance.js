const attendanceRoute = require('express').Router();

const Attendance = require('../models/attendance').Attendance;


attendanceRoute.get('/', async (request, response) => {
    await Attendance.find({}).exec((error, attendances) => {
        if (error) {
            response.status(500).send({error: "Internal Server Error"})
        }
        response.status(200).send(attendances);
    })
})


// [{name: ""}, {name: ""}]

attendanceRoute.post('/add', async (request, response) => {
    const attendance = new Attendance({persons:[request.body]});
    console.log(attendance);

    const saved_attendance = await attendance.save();

    response.status(201).send(saved_attendance);
    
})


module.exports = attendanceRoute;