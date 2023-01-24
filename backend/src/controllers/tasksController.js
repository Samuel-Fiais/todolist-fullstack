const taskModels = require('../models/tasksModel')

const getAll = async (_req, res) => {
	try {
		const tasks = await taskModels.getAll()
		return res.status(200).json(tasks)
	} catch (err) {
		return res.status(404).json({
			message: err.message
		})
	}
}

const createTask = async (req, res) => {
	try {
		const createdTask = await taskModels.createTask(req.body)
		return res.status(201).json({
			message: 'Created ' + req.body.title,
			insertId: createdTask
		})
		
	} catch (err) {
		return res.status(401).json({
			message: err.message
		})
	}
}

module.exports = {
	getAll,
	createTask
}