const express = require('express')
const dotenv = require('dotenv').config()
const { errohHandler, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const colors = require('colors')
const cors = require('cors')

const PORT = 5000

connectDB()

const app = express()

app.use(cors({
    origin: "*",
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(errorHandler)

app.use('/api/workouts', require('./routes/workoutRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))