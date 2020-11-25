const userRouter = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');


/**
 * request.body = {
 *  firstName: "",
 *  lastName: "",
 *  email: "",
 *  password: ""
 * }
 */

userRouter.post('/signup', async (request, response) => {
    const {firstName, lastName, email, password} = request.body;

    const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
    })


    const new_password = bcrypt.hashSync(password, 10);
    user.password = new_password;

    await user.save()

    response.status(201).send({message: "User Created Successful"})
})


userRouter.post('/login', async (request, response) => {
    console.log("User Data:", request.body)
    await User.findOne({email: request.body.email}, (error, user)=> {
        if (error) {
            return response.status(500).send({error: "Internal Server Error"})
        }

        
        if (!user) {
            return response.status(401).send({email: "No user with that email"})
        }

        const valid = bcrypt.compareSync(request.body.password, user.password);

        if (!valid) {
            return response.status(401).send({password: "Invalid Password"})
        }
        
        return response.status(200).send({message: "Login Successfull"})
    })
})



module.exports = userRouter;