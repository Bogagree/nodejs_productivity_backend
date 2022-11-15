const express = require('express');
const {request} = require("express");
const router = express.Router();

const {addUsers, getUsers} = require("./repository");


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/:id', async function (req, res) {
    let userId = req.params.id
    let users = await getUsers();
    let user = users.find(u => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
})

router.get('/', async function (req, res) {
    let users = await getUsers();
    if (!!req.query.search) {
        users = users.filter( user => user.name.includes(req.query.search))
    }
    res.send(users)
})

router.post('/', async (req, res) => {
    let result = await addUsers(req.body.name)
    res.send({success: true});
})

module.exports = router;