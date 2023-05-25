const jwt = require('jsonwebtoken')

function generateToken(user) {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        }
    )
}



module.exports = {
    generateToken
}