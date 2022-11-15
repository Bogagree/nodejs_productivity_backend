const express = require('express')
const users = require("./users-router");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express()
const port = 7915

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.raw());

app.use(cors())

app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('tasks')
})
// default action
app.use((req, res) => {
    res.send({value: 404});
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})