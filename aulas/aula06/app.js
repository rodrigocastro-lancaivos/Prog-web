const express = require('express');
const app = express()
const port = 3000

//Middleware global (log)
app.use((req,res,next) => {
    console.log(`Acessando: ${req.path}`)
    next()
})

app.get('/', (req, res) => {
    res.send("Root OK")
})

app.get('/about', (req, res) => {
    res.send("About OK")
})

app.post('/data', (req, res) => {
    res.send("Data OK")
})

app.get('/users', (req, res) => {
    res.redirect('/users/signup')
})

app.get('/users/:userid', (req, res) => {
    const userid = req.params.userid

    if (!userid) {
        return res.redirect('/users/signup')
    }

    res.send(`Bem vindo ${userid}`)
})

app.get('/users/signin', (req, res) => {
    res.send('Signin OK')
})

app.get('/users/signup', (req, res) => {
    res.send("Signup OK")
})

app.use((req, res) => {
    res.status(404).send('Erro 404, página não encontrada.')
})

app.listen(port, () => {
    console.log(`app ouvindo a porta ${port}`)
})