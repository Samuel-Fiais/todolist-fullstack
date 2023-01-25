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

const deleteTask = async (id) => {
	const [removedTask] = await connection.execute('DELETE FROM TODOLIST.TASKS WHERE ID = ?', [id])
	await connection.execute('ALTER TABLE TODOLIST.TASKS AUTO_INCREMENT = 1')
	return removedTask
}

const updateTask = async (id, task) => {
	const { title, status } = task
	console.log(task)
	const query = 'UPDATE TODOLIST.TASKS SET TITLE = ?, STATUS = ? WHERE ID = ?'

	const [updatedTask] = await connection.execute(query, [title, status, id])
	return updatedTask
}

module.exports = {
	getAll,
	createTask,
	deleteTask,
	updateTask
}