const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()

// Router Get Test
router.get('/', (req, res) => {
	res.status(200).send('Welcome to the TodoList')
})

// Get All Tests
router.get('/tasks', tasksController.getAll)

module.exports = router