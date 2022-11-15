const express = require('express')
const {getUsers, addUsers} = require("./repository");

const app = express()
const port = 7915

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${3000}`);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.get('/users', async (req, res) => {
    let users = await getUsers();
    res.send(users)
})

app.get('/tasks', async (req, res) => {
    res.send('tasks')
})

app.post('/users', async (req, res) => {
    let result = await addUsers('Ignat')
    res.send({success: true});
})

// default action
app.use(function (req, res) {
    res.send({value: 404});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})