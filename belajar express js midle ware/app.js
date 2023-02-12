const express =  require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();
const port = 3000

//gunakan ejs

app.set('view engine', 'ejs');

//third-party middleware
app.use(expressLayouts);
app.use(morgan('dev'));

//builtin middleware
app.use(express.static('public'));


//aplication  level midleware
app.use((req, res, next) => {
    console.log('time', date.now());
    next();
})

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'halaman home'
    });
    next();
});

app.get('/about', (req, res) => {
    // res.send('ini adalaha halaman about')
    // res.sendFile('./about.html', { root: __dirname });
    res.render('about', {
        title: 'halaman about'
    });
});

app.get('/contact', (req, res) => {
    // res.send('ini adalaha halaman about')
    res.render('contact', {
        title: 'halaman contact'
    });
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID:   ${req.params.id} \n category ID : ${req.params.idcat}`);
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('test');
});

app.listen(port, () => {
    console.log(`selamat datang di web express http://localhost:${port}`);
})

