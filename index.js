const express = require('express')
const { res } = require('express')
const app = express()
const PORT = 4000

const User = require('./models').user
const TodoList = require('./models').todoList

app.use(express.json())

app.get('/users/:userId', async (req, res) => {
	const userId = parseInt(req.params.userId)
	const user = await User.findByPk(userId)
	if (!user) {
		res.status(404).send('User not found')
	} else {
		res.send(user)
	}
})

app.post('/users', async (req, res) => {
	try {
		const email = req.body.email
		if (!email || email === ' ') {
			res.status(400).send('Must provide an email address')
		} else {
			const user = await User.create(req.body)
			res.json(user)
		}
	} catch (e) {
		next(e)
	}
})

app.put('/users/:userId', async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId)
		const userToUpdate = await User.findByPk(userId)
		if (!userToUpdate) {
			res.status(404).send('User not found')
		} else {
			const updatedUser = await userToUpdate.update(req.body)
			res.json(updatedUser)
		}
	} catch (e) {
		next(e)
	}
})

app.get('/todoLists', async (req, res, next) => {
	const todoLists = await TodoList.findAll()
	res.json(todoLists)
})

app.post('/todoLists', async (req, res, next) => {
	try {
		const todoLists = await TodoList.create(req.body)
		res.json(todoLists)
	} catch (e) {
		next(e)
	}
})

app.put('/todoLists/:todoListId', async (req, res, next) => {
	try {
		const todoListId = parseInt(req.params.todoListId)
		const todoListToUpdate = await TodoList.findByPk(todoListId)
		if (!todoListToUpdate) {
			res.status(404).send('List not found')
		} else {
			const updatedtodoList = await todoListToUpdate.update(req.body)
			res.json(updatedtodoList)
		}
	} catch (e) {
		next(e)
	}
})

function onListen() {
	console.log(`Let's listen to :${PORT}`)
}

app.listen(PORT, onListen)
