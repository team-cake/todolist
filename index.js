const express = require('express')
const { res } = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 4000

const User = require('./models').user
const TodoList = require('./models').todoList
const TodoItem = require('./models').todoItem

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

// get todoitems
app.get('/todoItems', async (req, res, next) => {
	const todoItems = await TodoItem.findAll()
	res.json(todoItems)
})

// create todoitems
app.post('/todoitems', async (req, res, next) => {
	try {
		const todoItems = await TodoItem.create(req.body)
		res.json(todoItems)
	} catch (e) {
		next(e)
	}
})

// update todolists
app.put('/todoitems/:todoItemsId', async (req, res, next) => {
	try {
		const todoItemsId = parseInt(req.params.todoItemsId)
		const todoItemsToUpdate = await TodoItem.findByPk(todoItemsId)
		if (!todoItemsToUpdate) {
			res.status(404).send('Item not found')
		} else {
			const updatedtodoItems = await todoItemsToUpdate.update(req.body)
			res.json(updatedtodoItems)
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

// delete a user
app.delete('/users/:userId', async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId)
		const toDelete = await User.findByPk(userId)
		if (toDelete) {
			const deleted = await toDelete.destroy()
			res.json(deleted)
		} else {
			res.status(404).send('User not found')
		}
	} catch (e) {
		next(e)
	}
})

// Delete a user's list
app.delete('/users/:userId/lists/:listId', async (req, res, next) => {
	try {
		const listId = parseInt(req.params.listId)
		const toDelete = await TodoList.findByPk(listId)
		if (toDelete) {
			const deleted = await toDelete.destroy()
			res.json(deleted)
		} else {
			res.status(404).send('List not found')
		}
	} catch (e) {
		next(e)
	}
})

// Delete user's all lists
app.delete('/users/:userId/lists', async (req, res, next) => {
	try {
		const userId = parseInt(req.params.userId)
		const user = await User.findByPk(userId, { include: [TodoList] })
		if (user) {
			user.todoLists.forEach(async (list) => await list.destroy())
			res.status(204).send()
		} else {
			res.status(404).send('User not found')
		}
	} catch (e) {
		next(e)
	}
})

function onListen() {
	console.log(`whaddup, let's listen to :${PORT}`)
}

app.listen(PORT, onListen)
