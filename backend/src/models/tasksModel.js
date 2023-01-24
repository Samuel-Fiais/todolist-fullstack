const connection = require('./connection')

const getAll = async () => {
	const tasks = await connection.execute('SELECT * FROM TODO.TASKS')
	return tasks
}

module.exports = {
	getAll
}