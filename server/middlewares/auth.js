const jwt = require('jsonwebtoken')

function deserializeUser(req, res, next) {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) return next()

    const token = authorizationHeader.split(' ')[1]
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user   
    } catch (error) {
        console.error('deserialization error: ', error)
    }
    next()
}

function requireAuth(req, res, next) {
    if (!req.user) {
        return res.sendStatus(401)
    }
    next()
}

module.exports = {
    deserializeUser,
    requireAuth
}