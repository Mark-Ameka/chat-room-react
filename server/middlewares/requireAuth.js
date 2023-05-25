const jwt = require('jsonwebtoken')

async function requireAuth(req, res, next) {
    const authorizationHeader = req.headers.authorization
    if (authorizationHeader) {
        const token = authorizationHeader.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                console.error(err)
                return res.sendStatus(401)
            }
            req.user = user
            next()
        })
    } else {
        return res.sendStatus(401)
    }
}

module.exports = requireAuth
