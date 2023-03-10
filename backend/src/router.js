const express = require('express')
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddlewares')

const router = express.Router()

// Router Get Test
router.get('/', (req, res) => {
	res.status(200).send('Welcome to the TodoList')
})

// Get All Tests
router.get('/tasks', tasksController.getAll)

// Create Task
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask)

// Delete Task
router.delete('/tasks/:id', tasksController.deleteTask)

// Update Task
router.put('/tasks/:id',
	tasksMiddleware.validateFieldTitle,
	tasksMiddleware.validateFieldStatus,
	tasksController.updateTask
)

module.exports = router