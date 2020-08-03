const express = require('express')
const app = express()
const PORT = 4000

const { user } = require('./models')

app.use(express.json())

app.post('/echo', (req, res) => {
	res.json(req.body)
})

function onListen() {
	console.log(`Let's listen to :${PORT}`)
}

app.listen(PORT, onListen)
