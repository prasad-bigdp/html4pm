//select h1 using tag name
let x = document.getElementsByTagName('h1');
console.log(x[0]);
// change text inside
x[0].textContent = "Hello Everyone"

//select p with class name para using class name
let y = document.getElementsByClassName('empty');
console.log(y[0]);
// change text inside
y[0].textContent = "hfkjvhdfkjhkjfdhvjdfh"


//select anchor tag with id link using id
let z = document.getElementById("link");
z.href = "https://www.instagram.com"


