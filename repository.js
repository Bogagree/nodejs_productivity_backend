let users = [
    {"id": 1, "name": "Dimych"}, {"id": 2, "name": "Natasha"}, {"id": 3, "name": "Gleb"}, {"id": 4, "name": "Alisa"}
];

const getUsers = () => {
    return users
}

const addtUsers = (name) => {
    users.push({name: name})
}

exports.getUsers = getUsers;
exports.addUsers = addtUsers;