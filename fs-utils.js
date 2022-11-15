const fs = require("fs");

exports.readJsonFromFile = (filepath) => {
    let promise = new Promise((res, rej) => {
        fs.readFile(filepath, {encoding: 'utf8'}, function (err, data) {
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

exports.writeJsonToFile = (filepath, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(filepath, JSON.stringify(data), {encoding: 'utf8'}, err => {
            if (err) rej(err);
            console.log('file written successfully');
            res()
        })
    })
}
