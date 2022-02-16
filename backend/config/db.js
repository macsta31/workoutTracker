const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(`mongodb+srv://macsta31:Awesome2001@stathiscluster.mquja.mongodb.net/workoutTracker?retryWrites=true&w=majority`)

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB