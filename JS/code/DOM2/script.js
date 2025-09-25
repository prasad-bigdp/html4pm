const h = document.getElementById('heading');
const p = document.querySelector('#para')
const input = document.getElementById('inp');
function fun ()
{
    console.log(p)
    p.style.backgroundColor = "blue";
    p.style.color = "white";
    p.style.fontSize = "48px"
    p.style.transform = "rotate(720deg)"
    alert(`Your string is ${input.value}. total no of characters are ${input.value.length}`)
// h.innerHTML =
//         "<img src='https://ih1.redbubble.net/image.4689247733.5060/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u8.webp' alt='' height='200'  />"
   
}