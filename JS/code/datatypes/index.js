// // let a = 25;
// // console.log(typeof a)
// // a = "prasad"
// // console.log(typeof a);
// // a = true;
// // console.log(typeof a);
// // a = undefined;
// // console.log(typeof a);
// // a = null;
// // console.log(typeof a);
// // a = [1, 2];
// // console.log(typeof a);
// // a = {};
// // console.log(typeof a);
// // function x () { }
// // console.log(typeof x);


// // // numbers
// // let num = 25.4118;
// // console.log(typeof num) //number
// // console.log(num.toFixed(2)) // it will round up for 2 digits after decimal 25.41
// // console.log(num.toPrecision(3)) // it will round up for 3 digits from starting  25.4
// // num = 25;
// // console.log(num.toString(2)) //11001 tostring convert number into string of any base

// // // math methods

// // console.log(Math.sqrt(16)) //4
// // console.log(Math.cbrt(27)) //3
// // console.log(Math.pow(2, 3)) //8
// // console.log(Math.abs(-10)) //10
// // console.log(Math.max(5, 3, 2, 1, 7, 8, 9, 12)) //12
// // console.log(Math.min(5, 3, 2, 1, 7, 8, 9, 12)) //1
// // console.log(Math.ceil(2.1)) //3 because 3 is nearest greater value
// // console.log(Math.floor(2.8)) //2 because 2 is nearest smaller value
// // console.log(Math.round(2.6)) //3 because nearest value


// // console.log(Math.round(Math.random() * 10000))
// // // i want value between 1 to 6
// // console.log(Math.ceil(Math.random() * 6))
// // // i want value between 7 to 14
// // console.log(Math.ceil(Math.random() * 7) + 6)

// // // strings
// // let n = "prasad", y = 'prasad';
// // console.log('The gandhi said,"Good night"',
// //     "The time is 5 o' clock", "My name is n");
// // console.log(`my name is ${n}`)
// // let p = 5, q = 10;
// // console.log(` The sum of ${p} and ${q} is ${p + q}`);

// // let cost = 5, quantity = 25;
// // // write in console to print "The total price of 25 apples with each cost 5 rupees is 125"
// // console.log(`The total price of ${quantity} apples with each cost ${cost} rupees is ${cost * quantity}`);

// // // string methods default
// // let str = "javascript";
// // console.log(str.length); //10
// // console.log(str[0]) //j
// // console.log(str.toUpperCase()) //JAVASCRIPT
// // console.log(str);//javascript because string are immutable
// // console.log(str.toLowerCase()) //javascript
// // console.log(str.charAt(0)); //j
// // console.log(str.indexOf('a')) //1
// // console.log(str.lastIndexOf("a")) //3
// // console.log(str.endsWith("pt"), str.startsWith("kt")) //true false
// // str="Javascript"
// // console.log(str.slice(1,5)) //avas -- from 1st index to 4th index
// // console.log(str.slice(6)) //ript -- from 6th index till end
// // str= "Js is so easy"
// // console.log(str.split(' ').length - 1) //3 -- no of spaces
// // str = "My name is prasad"
// // // how many vowels --  a e i o u
// // console.log(str.split("a").length - 1 + str.split("e").length - 1 + str.split('i').length - 1 + str.split('o').length - 1 + str.split('u').length - 1)
// // str= "         javscript            "
// // console.log(str.trim());
// // str = "javascript"
// // console.log(str.replaceAll('a','x'))

// // boolean
// let x = true;
// console.log(typeof x)
// // undefined is the default value for non existent values or undeclared values
// let y;
// console.log(y, typeof y)
// // console.log(z);

// let p = null;
// console.log(p);

















































// let a = 10;
// let x = ++a + a++;  // 11 + 11
// console.log(x);
// a = 10, b = 5;
// x = ++a + b-- + --a + ++b; //11 + 5 + 10 + 5
// console.log(x)

let num = +prompt("Enter a number");
let result = (num % 2 == 0) ? "Even" : "Odd";
console.log(`${num} is ${result}`);












