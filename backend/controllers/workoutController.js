const asyncHandler = require('express-async-handler')
const req = require('express/lib/request')

const Workout = require('../models/workoutModel')
const User = require('../models/userModel')

const getWorkouts = asyncHandler(async (req, res) => {
    const workouts = await Workout.find({ user: req.user.id })

    res.status(200).json(workouts)
})

const setWorkout = asyncHandler(async (req, res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please fill in all fields')
    }
    const workout = await Workout.create({
        text: req.body.text,
        date: req.body.date,
        detail: req.body.detail,
        user: req.user.id
    })

    res.status(200).json(workout)
})

const updateWorkout = asyncHandler(async (req, res) => {

    const workout = await Workout.findById(req.params.id)

    if(!workout){
        res.status(400)
        console.log('not found')
    }

    const user = await User.findById(req.user.id)

    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // check for proper ownership
    if(workout.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedWorkout)
})

const deleteWorkout = asyncHandler(async (req, res) => {

    const workout = await Workout.findById(req.params.id)

    if(!workout){
        res.status(400)
        console.log('not found')
    }
    
    const user = await User.findById(req.user.id)

    // check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // check for proper ownership
    if(workout.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await workout.remove()

    res.status(200).json({message: `Deleted goal ${workout}`})
})

module.exports = {
    getWorkouts,
    setWorkout,
    updateWorkout,
    deleteWorkout
}