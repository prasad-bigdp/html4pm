const inputUrl = document.getElementById('inp');
let deg = 0;
const image= document.getElementById('image')
function change ()
{
    image.src = inputUrl.value
}
function rotate ()
{
    deg = deg + 720;
    image.style.transform = `rotate(${deg}deg)`
}
function showHide ()
{
    image.classList.toggle('hide')
}




