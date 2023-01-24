require('dotenv').config()
const connection = require('./connection')

const getAll = async () => {
	const [tasks] = await connection.execute('SELECT * FROM TODOLIST.TASKS')
	return tasks
}

const createTask = async (task) => {
	const { title } = task
	const query = 'INSERT INTO TODOLIST.TASKS VALUES (DEFAULT, ?, ?, ?)'

	const currentDate = new Date()
	const year = currentDate.getFullYear()
	const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
	const day = currentDate.getDate().toString().padStart(2, '0')
	const date = `${year}-${month}-${day}`

	const newTask = [title, 'PENDENTE', date]

	const [createdTask] = await connection.execute(query, newTask)

	return createdTask.insertId
}

module.exports = {
	getAll,
	createTask
}