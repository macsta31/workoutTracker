const express = require('express')
const router = express.Router()
const {getWorkouts, setWorkout, updateWorkout, deleteWorkout} = require('../controllers/workoutController')

router.route('/').get(getWorkouts).post(setWorkout)
router.route('/:id').delete(deleteWorkout).put(updateWorkout)

module.exports = router