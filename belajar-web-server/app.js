const http = require('http');

const fs = require('fs');

const render = (path, res) => {
    fs.readFile(path, (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('error: file not found');
        } else {
            res.write(data);
        }
        res.end();
});

http
.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html',
    });


    fs.readFile('./index.html', (err, data) => {
        if(err) {
            res.writeHead(404);
            res.write('error: file not found');
        } else {
            res.write(data);
        }
        res.end();
    });
})

.listen(3000, () => {
    console.log('Server is listening on port 3000');
}); 