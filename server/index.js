const express = require('express');
const morgan = require('morgan')
const port = process.env.PORT || 3000;

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port, () => console.log(`server running on port ${port}`))

app.get('/', (req, res) => {
    return res.status(200).send('api is working');
});

app.post('/login', (req, res) => {
    username = req.body.username
    password = req.body.password
    if (username != undefined && password != undefined) {
        return res.status(200).send('ingreso exitoso')
    }
    return res.status(400).send('error al ingresar')
});

app.post('/add', (req, res) => {
    username = req.body.username
    password = req.body.password
    if (username != undefined && password != undefined) {
        return res.status(200).send('registro exitoso')
    }
    return res.status(400).send('error al registrar')
});

app.post('/update', (req, res) => {
    username = req.body.username
    password = req.body.password
    new_username = req.body.new_username
    if (username != undefined && password != undefined && new_username != undefined) {
        return res.status(200).send('actualizacion exitosa')
    }
    
    return res.status(400).send('error al actualizar')
});

module.exports = app