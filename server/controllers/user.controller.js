const UserModel = require('../models/user.model')

async function createUser(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const duplicate = await UserModel.findOne({ email })
        if (duplicate) {
            res.status(409)
            throw new Error('Email already in use')
        }
        const user = await UserModel.create({ name, email, password})
        return res.status(201).send(user)
    } catch (error) {
        console.log('error', error)
        next(error)
    }
}

module.exports = {
    createUser
}