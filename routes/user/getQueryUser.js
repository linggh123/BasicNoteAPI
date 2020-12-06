const express = require('express')
const users = require('../../databases/usersDb')
const app = express()

app.get('/user/query', (req, res) => {
    // 👇 access search property in query and save it to search variable
    const search = req.query.search
    // 👇 filter users that includes a same word with the search inserted at request by using "filter" method
    const foundUser = users.filter((user) => user.user.includes(search))
    // const variabel = databases.filter((path)=>path.properti.includes(query))
    res.send(foundUser)
})

module.exports = app