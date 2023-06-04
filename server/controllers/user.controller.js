const UserModel = require('../models/user.model')
const { generateToken } = require('../utils/jwt')

async function createUser(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const duplicate = await UserModel.findOne({ email })
        if (duplicate) {
            res.status(409)
            throw new Error('Email already in use')
        }
        const user = await UserModel.create({ name, email, password})

        const token = generateToken(user)
        return res.status(201).send({ token })
    } catch (error) {
        next(error)
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) {
            res.status(401);
			throw new Error('incorrect email');
        }

        const correctPass = await user.comparePassword(password)
        if (!correctPass) {
            res.status(401);
			throw new Error('incorrect password');
        }   

        const token = generateToken(user)
        return res.send({ token })

    } catch (error) {
        next(error)
    }
}

async function getUser(req, res, next) {
    return res.send({ user: req.user })
}


module.exports = {
    createUser,
    login,
    getUser
}