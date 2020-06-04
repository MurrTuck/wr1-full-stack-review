require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
const auth = require('./controllers/authCtrl');

const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
        secret: SESSION_SECRET
    })
)

//endpoints
//auth endpoints
app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.delete('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Here comes the Pitch from the db')
    app.listen(SERVER_PORT, () => console.log(`Hitting Dingers on Port ${SERVER_PORT}`))
}).catch(err => console.log(err))