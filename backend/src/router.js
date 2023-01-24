const express = require('express')

const router = express.Router()

// Router Get Test
router.get('/', (req, res) => {
	res.status(200).send('Welcome to the TodoList')
})

module.exports = router