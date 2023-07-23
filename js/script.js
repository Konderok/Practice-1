"use strict";

// let number = 4.6;

// console.log(-4/0);
// console.log("string" * 9);

// const persone = "5";

// const bool = false;

// // console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);


// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(arr[1])

// 7 урок

// alert("Hello");
// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "Да");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Какая у вас фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));


//Урок 8


// const category = 'toys';


// console.log(`https://someurl.com/${category}/5`);

// const user = 'Maxim';

// alert(`Привет, ${user}`);


// console.log('arr' + ' - object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 !== '6');

// const IsChecked = false,
//       IsClose = false;

// console.log(IsChecked || !IsClose);

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error!');
// const num = '50';
// switch (num) {
//     case '49': 
//         console.log('Неверно');
//         break; 
//     case '100':
//         console.log('Неверно');
//         break; 
//     case '50': 
//         console.log('В точку!');
//         break; 
//     default: 
//         console.log('Не в этот раз!');
//         break; 
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do  {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//         continue;
//     }
//     console.log(i);
// }
// Урок 16 
// let num = 20;
// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello world');
// console.log(num);
// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 20));
// console.log(calc(1, 1));
// console.log(calc(2, 40));
// console.log(calc(5, 10));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// let logger = function() {
//     console.log('Hello');
// };
// logger();

// const calc = (a, b) => {
//     console.log('10');
//     return a + b;
// };
// урок 17
// const str = 'TeSt';
// const arr = [1, 2, 3];
// // console.log(str[2] = 'd');
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);
// console.log(arr.length);
// const Fruit = 'Some fruit';
// console.log(Fruit.indexOf('q'));
// const logg = 'Hello world!';
// // console.log(logg.slice(6, 12));
// // console.log(logg.substring(6, 12));
// console.log(logg.substr(6, 5));
// const num = 12.2;
// console.log(Math.round(num));
// const test = '12.2px';
// // console.log(parseInt(test));
// console.log(parseFloat(test));
// Урок 19
// function first() {
//     //do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function Done() {
//     console.log('Я прошёл этот урок');
// }

// learnJS('JavaScript', Done);
// урок 20
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };
// options.makeTest();

// console.log(Object.keys(options).length);

// const Maxim = {
//     SecondName: 'Ivanov',
//     Old: 16,
//     Height: 186
// };

// console.log(Object.keys(Maxim));

// const {border, background} = options.colors;
// console.log(border);

// console.log(options['colors']['border'])

// console.log(options.name);

// delete options.name;

// console.log(options)
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) == 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//             counter++;
//         }
//     } else {
//             console.log(`Свойство ${key} имеет значение ${options[key]}`)
//             counter++;
//       }
// }
// console.log(counter);

// урок 21

// const arr = [1, 12, 23, 7, 9, 10];

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop();
// arr.push(11);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value); 
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));


//урок 22
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let = objCopy = {}
    
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
    
//     return objCopy;
// }

// const numbers = {
//     a: 5,
//     c: 4,
//     b: {
//         x:5,
//         y:2
//     }
// };

// const NewNumbers = copy(numbers);

// NewNumbers.a = 12;
// NewNumbers.b.x = 10;

// console.log(NewNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'addaadadad';
// console.log(newArray);
// console.log(oldArray);  

// const video = ['YouTube', 'Vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 1];

// log(...num);

// const array = ['a', 'b'];

// const newAarray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const NewObj = {...q};

//урок 23

// let str = 'some';
// let strObj = new String(str); 

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const Jonh = Object.create(soldier);

// const Jonh = {
//     health: 100
// };

// Jonh.__proto__ = soldier;

// Object.setPrototypeOf(Jonh, soldier);

// console.log(Jonh.armor);
// Jonh.sayHello();
