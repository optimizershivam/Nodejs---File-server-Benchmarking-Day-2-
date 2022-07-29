const fs = require('fs');
const http = require('http');
const fsPromises = fs.promises;

const server = http.createServer((req, res) => {
    let { url } = req;
    console.log(url);
    switch (url) {
        case "/textasync": {
            fs.readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
                res.end(err || data);
            })
            break;
        }
        case "/textsync": {
            const data = fs.readFileSync('./data.txt',
                { encoding: 'utf8', flag: 'r' });
            res.end(data);
            break;
        }
        case "/textstream": {
            var readstream = fs.createReadStream("./data.txt");
            readstream.pipe(res);
            break;
        }
        case "/textpromise": {
            fsPromises.readFile("./data.txt").then(data => {
                res.end(data);
            }).catch(err => {
                res.end(err);
            })
            break;
        }
        default: {
            res.end("default case");
            break;
        }

    }
})

server.listen(5000, () => {
    console.log("server is  on port 8080");
})