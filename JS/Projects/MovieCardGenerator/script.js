const inputURL = document.getElementById('url');
const inputName = document.getElementById('name');
const outputDiv = document.getElementById('output')
function add ()
{
    const divv = document.createElement('div');
    divv.classList.add('card')
    const image = document.createElement('img');
    image.src = inputURL.value;
    image.height = "200";
    const para = document.createElement('p');
    para.textContent = inputName.value;
    divv.append(image, para);
    outputDiv.appendChild(divv)


}