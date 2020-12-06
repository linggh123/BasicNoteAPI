const express = require('express')
const users = require('../../databases/usersDb')
const app = express()

// 👇 handle DELETE request method at /user
app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    // 👇 filter the users that not have an id same as id inserted at request
    const updatedusers = users.filter((user) => user.id !== id)
    // 👇 clear out users item one by one with forEach loop
    users.forEach(() => {
        users.splice(0)
    });
    // 👇 for filtered users, push each filtered users to users array
    updatedusers.forEach((updatduser) => {
        users.push(updatduser)
    })
    // 👇 send "Ok" to the user
    res.send('Ok')
})

module.exports = app