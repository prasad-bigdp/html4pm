const outputdiv = document.getElementById('output');
const input = document.getElementById('inp');
const btn = document.getElementById('btn');
function getPokemonDetails ()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        .then((res) => res.json())
        .then((data)=>displayData(data))
        .catch((err) => console.log(err))
    
}
btn.addEventListener('click', getPokemonDetails);
function displayData (data)
{
    outputdiv.textContent = '';
    const pname = document.createElement('h2');
    pname.textContent = "Name: " + data.name;
    const pImage = document.createElement('img');
    pImage.src = data.sprites.front_default;
    pImage.alt = data.name;
    const height = document.createElement('p');
    height.textContent = "Height: " + data.height;
        const weight = document.createElement("p")
    weight.textContent = "Weight: " + data.weight;
    outputdiv.append(pImage, pname, height, weight);
}