const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    return next()
})

userSchema.methods.comparePassword = async function (candidatePass) {
    return bcrypt.compare(candidatePass, this.password).catch(() => false)
}

const UserModel = mongoose.model('User', userSchema)
module.exports = UserModel