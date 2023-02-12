function cetakNama(nama) {
    return `halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'jmbd',
    umur : 20,
    cetakMhs() {
        return `halo, nama saya ${this.nama} dan saya ${this.umur} tahun`;
    }
}

class orang {
    constructor() {
        console.log('objek orang telah dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.orang = orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     orang: orang,
// }

module.exports = { cetakNama, PI, mahasiswa, orang };