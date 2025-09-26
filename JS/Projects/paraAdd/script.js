function addPara ()
{
    const pa = document.createElement('p')
    pa.textContent = "Hello World";
    document.getElementById("myParas").appendChild(pa)
}
function addImage ()
{
    const i = document.createElement('img');
    i.src =
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png";
    i.height = "200";
    i.width = "200";
      document.getElementById("myParas").appendChild(i)
}