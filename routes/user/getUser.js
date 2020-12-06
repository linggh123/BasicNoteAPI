const express = require('express')
// 👇 import exported variable at notesDb.js
const users = require('../../databases/usersDb')
const app = express()

// 👇 handle GET request method at /user
app.get('/user', (req, res) => {
    // 👇 send the notes array variable
    res.send(users)
})

module.exports = app