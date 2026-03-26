const express = require("express")
const app = express()
const port = 3000
let userId = null



app.get('/', (req, res) => {
    res.send("root")
    console.log('Root running...')
})

app.get('/about', (req, res) => {
    res.send("about")
    console.log('About running...')
})

app.post('/data', (req, res) => {
    res.send("data")
    console.log('Data running...')
})

app.get('/user', (req, res) => {
    console.log('User running...')
    res.redirect('/user/signup')
})

app.get('/user/signin', (req, res) => {
    res.send(`<h1>Signin<br>Boas Vindas ${userId}</h1>`)
    console.log('Signin running...')
})

app.get('/user/signup', (req, res) => {
    res.send("signup")
    console.log('Signup running...')
})

app.get('/user/:userid', (req, res) => { 
    userId = req.params.userid
    res.send(`userid: ${userId}`);
    console.log('Userid running...')
})

app.use((req, res) => {
    res.status(404).send('Page not found')
})

app.listen(port, () => {
    console.log('Server running...')
})