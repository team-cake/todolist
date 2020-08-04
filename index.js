const express = require('express')
const app = express()
const PORT = 4000

const User = require('./models').user

app.use(express.json())

app.post('/echo', (req, res) => {
	res.json(req.body)
})

app.post('/users', async (req, res, next) => {
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

function onListen() {
	console.log(`Let's listen to :${PORT}`)
}

app.listen(PORT, onListen)
