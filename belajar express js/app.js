const express =  require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/about', (req, res) => {
    // res.send('ini adalaha halaman about')
    res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
    // res.send('ini adalaha halaman about')
    res.sendFile('./contact.html', { root: __dirname });
});

app.get('/product/:id', (req, re) => {
    res.send(`Product ID:   ${req.params.id} \n category ID : ${req.params.idcat}`);
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('test');
});

app.listen(port, () => {
    console.log(`selamat datang di web express http://localhost:${port}`);
})

// const http = require('http');

// const fs = require('fs');

// const render = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('error: file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
// });

// http
// .createServer((req, res) => {
//     res.writeHead(200, {
//         'content-type': 'text/html',
//     });


//     fs.readFile('./index.html', (err, data) => {
//         if(err) {
//             res.writeHead(404);
//             res.write('error: file not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     });
// })

// .listen(3000, () => {
//     console.log('Server is listening on port 3000');
// }); 

