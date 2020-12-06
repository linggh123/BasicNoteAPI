const express = require('express')
const users = require('../../databases/usersDb')
const app = express()

// 👇 handle POST request method at /note
app.post('/user', (req, res) => {
    // 👇 use req "body" property to access body at request to this route and save it to body variable
    const body = req.body
    // 👇 push into an array anything inside the body
    users.push(body)
    res.send(req.body)
})

module.exports = app