const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add text value']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)