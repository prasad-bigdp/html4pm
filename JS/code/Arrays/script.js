// // // let arr = [5, 9, 6, 7, 3];
// // // console.log(arr, arr[5]);
// // // arr[20] = 49;
// // // console.log(arr);

// // // console.log(arr.length); //21

// // // arr = [21, 22, 23, 24];
// // // arr.push("raj",25,96,85,74);
// // // console.log(arr)
// // // arr.pop();
// // // console.log(arr);
// // // arr.unshift("prasad", 5)
// // // console.log(arr);
// // // arr.shift();
// // // console.log(arr);
// // //     let friends = ["sheldon", "monica", "rachel", "ross", "phoebe", "shinchan"]
// // // /* 1. delete shinchan and add "joey"
// // //       2. delete "sheldon" and add "chandler"
// // //       3. add name "emma" between rachel and ross */
// // // friends.pop(); friends.push("joey");
// // // friends.shift(); friends.unshift("chandler");
// // // friends.splice(3, 0, "emma")
// // // console.log(friends)

// // // arr = [5, 6, 7, 8]; 
// // // arr.forEach(function (e, i)
// // // {
// // //     console.log(e*e);
// // // })
// // // // using foreach find sum of elements in the array
// // // let sum = 0;
// // // arr.forEach(function (ele, ind)
// // // {
// // //     sum = sum + ele;
// // // })
// // // console.log(sum)
// // // let str = "World Health Organization"
// // // // using foreach print "WHO" for given str
// // // let words = str.split(' ');
// // // console.log(words);
// // // let abbr = '';
// // // words.forEach((e, i)=>abbr = abbr + e.charAt(0))

// // // console.log(abbr)
// // // use forEach and print each elements cube in given array
// //    let arr = [5,4,9,8];
// //    arr.forEach(function(ele,ind){
// //       console.log(ele**3)
// //    })
// // let values = arr.forEach((ele, ind) =>
// // {
// //     return ele % 2 == 0;
// // })
// // console.log(values)
// // let values2 = arr.map((ele, ind) => {
// // 	return ele % 2 == 0
// // })
// // console.log(values2)
// // let values3 = arr.filter((ele, ind) => {
// // 	return ele % 2 == 0
// // })
// // console.log(values3)
// let arr = [5, 4, 9, 8];
// console.log(arr.indexOf(4), arr.lastIndexOf(4));
// let x =arr.findIndex((ele, ind) =>
// {
//     return ele%2==0
// })
// console.log(x)
// let actresses = ["kajal agarwal","some agarwal","aishwarya"] 
// let res =actresses.find((ele, ind) =>
// {
//     return ele.endsWith("agarwal");
// })
// console.log(res);

// arr = [5, 4, 6, 7, 8, 9, 10];
// // print array of indexes of odd numbers in given array
// let y = arr.map((ele, ind) =>
// {
//     return ele % 2 != 0 ? ind : 'null'
// })
// console.log(y)
// let z = y.filter((ele, ind) => ele != 'null')
// console.log(z);

// let names = ["raja", "puja", "john", "maaja"];
// // print first letter of words whose last letter is 'a'
// let x1 = names.filter((ele, ind) => ele.endsWith('a'))
// console.log(x1);
// x1.forEach((ele, ind) => console.log(ele.charAt(0)))

// arr=[5,8,7,6,1,9,3]
// // print the first odd number that is greater than 5

// let z1 =arr.find((ele,ind)=>ele%2!=0 && ele>5)
// console.log(z1);




































let arr = [5, 4, 6, 8, 9];
arr.reverse();
console.log(arr);

let str = "prasad";
console.log(str.split('').reverse().join(''))

let res = arr.reduce((p, c) =>
{
    return p+c
}, 0)
console.log(res);














