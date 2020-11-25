const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})



userSchema.set('toJSON', {
    transform: (document, returnedUser) => {
        returnedUser.id = returnedUser._id.toString();
        delete returnedUser._id;
        delete returnedUser.__v;
        delete returnedUser.password;
    }
})


User = mongoose.model('User', userSchema);


module.exports = User;