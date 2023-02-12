const { MongoClient, ObjectId } = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'ikbal';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((e, client) => {
    if(e) {
        return console.log('koneksi gagal');
    }

    //pilih DB
    const db = client.db(dbName);

    //menambahkan 1 data ke collection mahasiswa
    //     db.collection('mahasiswa').insertOne(
    //         {
    //         nama: 'ikbal',
    //         email: 'ngentotsejati@gmail.com',
    //     },
    //     (e, result) => {
    //         if(e) {
    //             return console.log('gagal menambahkan data');
    //         }

    //         console.log(result);
    //     }
    // );

    //menambahkan lebih dari 1 data 
    // db.collection('ikbal').insertMany(
    //     [
    //         {
    //             nama: 'ikbal',
    //             email: 'ngentotsejati@gmail.com'
    //         },
    //         {
    //             nama: 'kontol',
    //             email: 'ngeweenak@gmail.com'
    //         }
    //     ],
    //     (e, resultr) => {
    //         if(e) {
    //             return console.log('data gagal di tambahkan');
    //         }
    //         console.log(result);
    //     }
    // );

    //menampilkan semua data yang ada di colection 'ikbal'
    // db.collection('ikbal').find();
    // console.log(
    //     db
    //     .collection('ikbal')
    //     .find()
    //     .toArray((e, result) => {
    //         console.log(result);
    //     })
    // );

    //mengubah data berdasarkan id
    //sisa nya baca docs nya
});