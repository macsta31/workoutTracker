const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'Please add text value']
    },
    date: {
        type: Date,
        required: [true, 'Please fill out date field']
    },
    detail: {
        type: String,
        required: [false]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Workout', workoutSchema)