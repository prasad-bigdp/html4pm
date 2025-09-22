let arr = [5, 9, 6, 7, 3];
console.log(arr, arr[5]);
arr[20] = 49;
console.log(arr);

console.log(arr.length); //21

arr = [21, 22, 23, 24];
arr.push("raj",25,96,85,74);
console.log(arr)
arr.pop();
console.log(arr);
arr.unshift("prasad", 5)
console.log(arr);
arr.shift();
console.log(arr);
    let friends = ["sheldon", "monica", "rachel", "ross", "phoebe", "shinchan"]
/* 1. delete shinchan and add "joey"
      2. delete "sheldon" and add "chandler"
      3. add name "emma" between rachel and ross */
friends.pop(); friends.push("joey");
friends.shift(); friends.unshift("chandler");
friends.splice(3, 0, "emma")
console.log(friends)

arr = [5, 6, 7, 8]; 
arr.forEach(function (e, i)
{
    console.log(e*e);
})
// using foreach find sum of elements in the array
let sum = 0;
arr.forEach(function (ele, ind)
{
    sum = sum + ele;
})
console.log(sum)
let str = "World Health Organization"
// using foreach print "WHO" for given str
let words = str.split(' ');
console.log(words);
let abbr = '';
words.forEach((e, i)=>abbr = abbr + e.charAt(0))

console.log(abbr)


