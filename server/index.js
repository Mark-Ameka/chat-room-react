const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const router = require('./routes')

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err.message))

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))    
app.use('/api', router)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})