const mongoose = require('mongoose');


const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Person = mongoose.model('Person', personSchema);


const attendanceSchema = mongoose.Schema({
    persons: {
        type: Array,
        default: []
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

// obj.name; obj._id ==> obj.id; obj.__v
// [{name: ""},{name: ""},{name: ""}, 12/02/12]
// [{name: ""},{name: ""},{name: ""}, 12/02/12]

attendanceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.key = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})


const Attendance = mongoose.model('Attendance', attendanceSchema);


module.exports = {
    Attendance,
    Person
}