//     const nama = 'ikbal';
// const cetakNama = (nama) => `hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require('fs');//core module
// const cetakNama = require(`./coba`)// mengimport local module
// const moment = require('moment');//third party module/npm module/node_modules


// const cetakNama = require('./coba');
// const PI = require('./coba');

const coba = require('./coba');

console.log(
    coba.cetakNama('ikbal'),
    coba.PI,
    coba.mahasiswa.cetakMhs(),
    new coba.orang()
    );