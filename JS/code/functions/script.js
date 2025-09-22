// // // // function displayHello() {
// // // // 	console.log("hello world")
// // // // }
// // // // displayHello()

// // // // function addTwoValues (a, b)
// // // // {
// // // //     console.log(a + b);
// // // // }
// // // // addTwoValues(5, 3);
// // // // addTwoValues(2)
// // // // addTwoValues()

// // // // function characters (s)
// // // // {
// // // //     if (typeof (s) == 'string')
// // // //     {
// // // //         return s.length
// // // //     }
// // // //     else
// // // //     {
// // // //         return "input only strings"
// // // //     }
// // // // }
// // // // let value = characters("prasad")
// // // // console.log(value)
// // // // let value2 = characters(1234);
// // // // console.log(value2);

// // // // function sample() {
// // // // 	console.log("hi")
// // // // }
// // // // console.log(sample)
// // // // let x = function ()// function
// // // //  // expression
// // // // {
// // // //     console.log("bye")
// // // // }
// // // // x()
// // // // console.log(x);

// // // // write a function that returns area of circle using parameter 'radius'
// // // function areaOfCircle (r)
// // // {
// // //     return Math.PI * r * r;
// // // }
// // // let areaOfCircle2 = function (r)
// // // {
// // //     return Math.PI * r * r;
// // // }
// // // let a1 = areaOfCircle(5);
// // // console.log(a1);
// // // console.log(areaOfCircle);



// // // let y = function () { console.log("hi") };
// // // console.log(y);
// // // function z ()
// // // {
// // //     console.log("hi")
// // // }
// // // console.log(z)

// // // normal
// // function add (a, b)
// // {
// //     return a + b;
// // }
// // console.log(add(5, 3));
// // // function expression
// // let add2 = function (a, b)
// // {
// //     return a + b;
// // }
// // console.log(add2('5'))
// // // arrow functions
// // let add3 = (a, b) => a + b;
// // console.log(add3(5, 3))


// function message ()
// {
//     console.log("It is a message")
// }

// function rani (p)
// {
//     p()
// }

// rani(message);

// function convert (s)
// {
//     return s.toUpperCase();
// }
// function firstLetter (fun)
// {
//     let x = fun("prasad")
//     return x[0];
// }
// firstLetter(convert)

// function greet (name, fun)
// {
//     fun(name)
// }
// function sayName (n)
// {
//     console.log(`My name is ${n}`)
// // }
// // greet("prasad", sayName);





// function outer ()
// {
//     let a = 5;
//     function inner ()
//     {
//         ++a;
//         console.log(a);
//     }
//     return inner;
// }
// let x = outer();
// x()
// x()
// x()








// let a= (function (a,b)
// {
//     let password = "1234567"
// 	return a+b
// })(4,5)
// console.log(a) // error





// function fun2(a,b=5)
// {
//     console.log(a+b)
// }

// fun2(10, 10);
// fun2(5);
// Rewrite below function into function expression and arrow function

// function square (n)
// {
//     console.log(n * n);   
// }
// square(5);
// let square2 = function (n) // declaring function as a variable
// {
//     console.log(n * n); 
// }
// let square3 = (n) => console.log(n * n) 



// function fun3 (a, b)
// {
//     return a + b;
// }
// console.log(fun3(5, 2));

// let x =function (a, b) {
// 	return a + b
// }
// let y = (a, b) => a + b;

// let fact =  (n) =>
// {
//     let f = 1;
//     for (let i=n; i >= 1; i--)
//     {
//         f = f * i;
//     }
//     return f;
// }
// console.log(fact(5));

// //callback functions
// function add (a,b)
// {
//   console.log(a+b)  
// }
// function sub(a, b) {
// 	console.log(a - b)
// }
// function calculate (f1, f2)
// {
//     f1(5, 3); f2(5, 3);
// }
// calculate(add, sub);

// create a function cube which take number 'n' as parameter and print cube of a number. create a function cal which accepts cube as parameters and receive it and calls it back
let cube =(n)=>console.log(n*n*n)
let cal = (f) => f(5);
cal(cube);
// currying pattern;

function mul (a)
{
    return function innerMul (b)
    {
        return function innerMul2 (c)
        {
            return a * b * c;
        }
    }
}
let mul2 = (a) => (b) => (c) => a * b * c;
let x = mul(5);
let y1 = x(1);
let y2 = x(2);
let y3 = x(3);
let y4 = x(4);
console.log(y1,y2,y3,y4);







