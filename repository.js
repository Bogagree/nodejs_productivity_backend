const fs = require("fs")

const getUsers = () => {

    let promise = new Promise((res, rej) => {
        fs.readFile("db", {encoding: 'utf8'}, function (err, data) {
            if (err) {
                console.error('my err', err);
                rej(err)
            } else {
                res(JSON.parse(data.toString()))
                // res(JSON.stringify(data.toString()))
            }
        })
    })
    return promise;
}

const addUsers = async (name) => {
    let users = await getUsers()
    users.push({"name": name})
    return new Promise((res, rej) => {
        fs.writeFile("db", JSON.stringify(users), {encoding: 'utf8'}, err => {
            if (err) rej(err);
            console.log('file written successfully');
            res()
        })
    })
}

exports.getUsers = getUsers;
exports.addUsers = addUsers;