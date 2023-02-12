// core module
//file system
const fs = require('fs');

//menuliskan string ke file secara synchronous
// try {
//     fs.writeFileSync('data/test.txt', 'hello world secara synchronous');
// } catch(e) {
//     console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/test.txt', 'hello world secara asynchronous', (e) => {
//     console.log(e);
// })

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (e,data) => {
//     if(e) throw e;
//     console.log(data);
// });

//readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('masukan nama anda : ', (nama) => {
    rl.question('masukan no hp anda : ', (nohp) => {
        const contact = { nama, nohp };
        const file = fs.readFileSync('data/contacts.json', "utf-8");
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('terimakasih sudah ngentot sama gw ');
        rl.close();
    });
}); 