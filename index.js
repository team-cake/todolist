const express = require('express')
const { res } = require('express')
const app = express()
const PORT = 4000

const User = require('./models').user
const TodoList = require('./models').todoList

app.use(express.json())

// find user
app.get('/users/:userId', async (req, res) => {
	const userId = parseInt(req.params.userId)
	const user = await User.findByPk(userId)
	if (!user) {
		res.status(404).send('User not found')
	} else {
		res.send(user)
	}
})

// create user
app.post('/users', async (req, res) => {
	try {
		const email = req.body.email
		if (!email || email === ' ') {
			res.status(400).send('Please provide an email address')
		} else {
			const user = await User.create(req.body)
			res.json(user)
		}
	} catch (e) {
		next(e)
	}
})

// update existing user
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

// get todolists
app.get('/todoLists', async (req, res, next) => {
	const todoLists = await TodoList.findAll()
	res.json(todoLists)
})

// create todolists
app.post('/todoLists', async (req, res, next) => {
	try {
		const todoLists = await TodoList.create(req.body)
		res.json(todoLists)
	} catch (e) {
		next(e)
	}
})

// update todolists
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

// get lists of a user
app.get('/users/:userId/lists', async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId)
		const user = await User.findByPk(userId, {
			include: [TodoList],
		})
		if (!user) {
			res.status(404).send('List not found for this user')
		} else {
			res.send(user.todoLists)
		}
	} catch (e) {
		next(e)
	}
})

// create lists for a specific user, dont forget userid!
app.post('/users/:userId/lists', async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId)
		const user = await User.findByPk(userId)
		if (!user) {
			res.status(404).send('User not found')
		} else {
			const newList = await TodoList.create({ userId, ...req.body })
			res.json(newList)
		}
	} catch (e) {
		next(e)
	}
})

// update list for specific user
app.put('/users/:userId/lists/:listId', async (req, res, next) => {
	try {
		const listId = parseInt(req.params.listId)
		const toUpdate = await TodoList.findByPk(listId)
		if (toUpdate) {
			const updated = await toUpdate.update(req.body)
			res.json(updated)
		} else {
			res.status(404).send('List not found')
		}
	} catch (e) {
		next(e)
	}
})



function onListen() {
	console.log(`Let's listen to :${PORT}`)
}

app.listen(PORT, onListen)
