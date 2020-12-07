const jwt = require('jsonwebtoken') //jsonweb token digunakan
// 👇 use environment variables to help jwt methods create a token
const JWT_SECRET = process.env.JWT_SECRET // password agar bisa mengakses Token
const JWT_EXPIRES = process.env.JWT_EXPIRES //expires dari token yang kita gunakan, bisa diatur selama apa, selama server masih running

// 👇 function to create a token
function signJwt(payload) { //payload itu semua yang ada di body register => id, username, token yang ditampilkan
  // 👇 use jwt "sign" method by adding information that wants to be included in token, secret code to encode it, and how long the token lasts
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES }) // mengimplementasikan jwt, termasuk payload, passowrd, dan expires nya
  return token //dikembalikan dalam bntuk token.
}

// 👇 function to break down token information dan handle masalah error di token
function parseJwt(token) {
  // 👇 due jwt "verify" method can make a error (as we can call it in future "throw an error")
  // we should implement try-catch to handle the error (as we can call it in future "catch the error")
  // to prevent the app from crashes and give a proper response
  try { //jalankan
    // 👇 verify the token & take the information inside token to result variable
    const result = jwt.verify(token, JWT_SECRET) //verifikasi token apakah ada di database atau tidak
    return result // kembalikan dalam bentuk hasil/result nya
  } catch (err) { // kalau tidak ada di databse, tangkap error nya/keluarkan errornya
    // 👆 catch the error, the "err" parameter will contain information about what caused the error
    // 👇 log the error
    console.log(err); //munculkan hasil errornya
    // 👇 return null, so we can use this function and add a condition if the token was wrong or expired
    return null //balikkan ke client dalam bentuk null
  }
}

// 👇 exports two function inside this file using "Object Property Value Shorthand", so any file that requires this file will recieves an object with two methods
module.exports = {
  signJwt,
  parseJwt
}