// string pallindrome
// const s = prompt("enter a string "); //
// let str = s.toLowerCase();
// let revstr = '';
// for (let i = str.length - 1; i >= 0; i--)
// {
//     revstr = revstr + str.charAt(i);
// }
// if (revstr == str)
// {
//     console.log(`${str} is pallindrome`)
// }
// else
// {
//     console.log(`${str} is not a pallindrome`)
// }
//1. write a js code to print sum of array elements
// let arr = [5, 4, 3, 2, 1], sum = 0;
// for (let i of arr)
// {
//     sum = sum + i;
// }
// console.log(sum);
  // 3.using loops find the sum of nested arrays and print them
// let marks = [[10, 20, 10, 50], [0, 10, 30, 40], [10, 10, 10, 10]];

// for (let i in marks)
// {
//     let sum = 0;
//     for (let j of marks[i])
//     {
//         sum += j;
//     }
//     console.log(`the sum of test ${+i+1} is ${sum}`)
// }
//
let str = "java", str2 = '';
for (let i = 0; i < str.length; i++)
{
    str2 = str2 + " " + str.charAt(i);
    console.log(str2)  // " p r"
}
// str= "java"
//  A
//  A V
//  A V A
//  A V A J
