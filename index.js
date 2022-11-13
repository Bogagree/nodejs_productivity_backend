let http = require('http')
const {usersController} = require("./usersController");

let cors = (req, res) => {
    // Set CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return true
    }
    return false
}

let server = http.createServer((req, res) => {
    if (cors(req, res)) return

    switch (req.url) {
        case "/users":
            usersController(req,res)
            break;
        case "/lessons":
            res.write(`tasks`)
            break;
        default:
            res.write(`PAGE NOT FOUND`)
    }
})

server.listen(7915)

// console.log(http)