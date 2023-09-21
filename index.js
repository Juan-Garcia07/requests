const express = require('express')

const app = express()

// http://localhost:3000/login?user=juan&password=123

app.get('/login', (req, res) => {
    const {user, password} = req.query
    if(!user || !password){
        res.status(400).json({msg: 'you need to provide <user> and <password> parameter'})
        return
    }
    if(user == 'juan' && password == '123'){
        res.json({msg: 'Iniciastes sesion con exito'})
        return
    }
    res.status(400).json({msg: 'Error en el usuario o contraseña'})
})

//http://localhost:3000/
app.get('/:nombre', (req, res) => {
    const params = req.params
    res.json({params})
})

app.post('/', (req, res) => {
    res.json({msg: "Hello GET!"})
})

app.get('/', (req, res) => {
    res.json({msg: "Hello PUT!"})
})

app.patch('/', (req, res) => {
    res.json({msg: "Hello PATCH!"})
})

app.delete('/', (req, res) => {
    res.json({msg: "Hello DELETE!"})
})



app.listen(3000, () => (console.log('listening on port 3000')))