// https://docs.google.com/spreadsheets/d/1w6q2qUntQEbghH-mX4GmO-dJ4dhHOChTd90rTR10mlE/edit#gid=1724914701
console.log(window.innerHeight);


// const a =5;

// let b = 10;

//console.log(b);

// b = 15;

//console.log(b);

// var c = 10;

//console.log(c);

// const firstObject = {
//     name: 'Khanh',
//     age: 22,
//     favoriteFoods: ['meat','donut'],
//     dob: '22/10'
// };

// console.log(firstObject.name);

// console.log(firstObject['date of birth']);


// firstObject.name = "Ngo Khanh";

// firstObject.address = "Yen Vien";

// console.log(firstObject);

// const firstArray = [1, 2, 3, 4, 5];
// console.log(firstArray.length);
// console.log(firstArray[firstArray.length - 1]);

// function
// function firstFunction(number1, number2) {
//     console.log(number1 + number2);
// };

// firstFunction(5, 6);

// const secondFunction = (number1, number2) => {
//     console.log((number1 + number2) * 10 / 2);
// };

// secondFunction(10, 20);

// const firstObject = {
//     name: 'Khanh',
//     age: 22,
//     favoriteFoods: ['meat', 'donut'],
//     dob: (number1, number2) => {
//         console.log((number1 + number2) * 10 / 2);
//     },
// };

// console.log(firstObject.dob);
// firstObject.dob(10, 15);

// console.log('Ngo Van Khanhhhhhh'.length);
// console.log(4.4444444444.toFixed(2));

// console.log(typeof Number('5'));

// falsy value: undefined, null, 0, ''

// truthyvalue: '123', 23, -23, {}, []

// const firstDate = new Date('10/22/2010');
// console.log(firstDate.getDate());
// console.log(firstDate.getMonth());

// const firstRegex = /add/;
// console.log(firstRegex.test('123'));

// console.log(new Error());

// setTimeout(() => {
//     console.log('after 5s');
// }, 5000);

// console.log(1);

// const callback = () => {
//     console.log('after 2s');
// };
// setTimeout(callback,3000);
// // setTimeout(() => {
// //     console.log('after 2s');
// // }, 2000);

// console.log(2);

const myArray = [1, 2, 3, 4, 5, 6]
// // for (let i = 1; i < myArray.length; i += 1) {
// //     console.log(myArray[i]);
// // }
// for (const item of myArray) {
//     console.log(item);
// }

myArray.forEach((item) => {
    console.log(item);
});