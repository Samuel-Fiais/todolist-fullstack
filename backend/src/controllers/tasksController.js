const taskModels = require('../models/tasksModel')

const getAll = async (req, res) => {
	try {
		const tasks = await taskModels.getAll()
		return res.status(200).json(tasks)
	} catch (err) {
		return res.status(404).json({
			message: err.message
		})
	}
}

module.exports = {
	getAll
}