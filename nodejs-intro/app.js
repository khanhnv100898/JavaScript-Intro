const fs = require('fs');
const path = require('path');

// fs.writeFile('./test.txt',`
//     Test Hello
//     One Two Three
// `,
// (err) => {
//     if(err){
//         throw err;
//     }
//     console.log('Write file success!');
// });

// fs.readFile('./test.txt',{encoding:'utf8'},(err, data) => {
//     if(err){
//         throw err;
//     }else{
//         console.log('Read file success!');
//         console.log(data);
//     }
// });

// fs.readFile('./test.txt', (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log('Read file success!');
//         console.log(data.toString('utf8'));
//     }
// });

// fs.readdir('../html-css', (error,files) => {
//     if(error){
//         throw error;
//     }
//     console.log('Read dir success!');
//     console.log(files);
// });

// fs.watchFile('./test.txt', (current, previous) => {
//     console.log(current);
//     console.log(previous);
// });