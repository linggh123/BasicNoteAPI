const express = require('express')
const notes = require('../../databases/notesDb')
const authorize = require('../../middlewares/authorizationMiddleware')
const { nanoid } = require('nanoid')
const app = express()

// 👇 use the authorize middleware in this route
app.use(authorize) // agar bisa mengakses token/menjadikan routes ini untuk menggunakan token, kalau tidak pakai token gak akan bisa akses

app.post('/note', (req, res) => {
  const body = req.body // isi body kaya "notes" : "my first notes"
  const user = req.user // ambil bearer token dari userdb
  body.username = user.username
  const id = nanoid()
  body.id = id //nano id dari user diambil berdasarkan bearer token yg kita masukkan
  notes.push(body)
  res.send(req.body)
})

module.exports = app