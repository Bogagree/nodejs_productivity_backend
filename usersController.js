const {addUsers, getUsers} = require("./repository");


exports.usersController = async (req, res) => {
    if (req.method === "POST") {
        //action
        debugger
        let result = await addUsers('Fedor')
        res.write(JSON.stringify({success: true}));
        res.end()
    } else {
        let users = await getUsers();
        res.write(JSON.stringify(users));
        res.end();
    }
}