function fun1 ()
{
    const para = document.getElementById('hw')
    para.textContent = "Bye world"
}
function fun2 ()
{
    const k = document.getElementById("kitty");
    k.style.position = "absolute";
    k.style.top = Math.ceil(Math.random() * 100) + "%";
     k.style.left = Math.ceil(Math.random() * 100) + "%"

}

document.addEventListener('keydown', function (e)
{
    console.log(e.key)
    if (e.ctrlKey && e.key == 'a')
    {
        console.log("prasad")
    }
})
document.addEventListener('keydown', function (e)
{
    if (e.key == 'r')
        document.getElementById("para").style.color = "red"
    if (e.key == "ArrowUp")
        document.getElementById("para").style.top = "-20px"
})

document.getElementById("form").addEventListener('submit', function (e)
{
    e.preventDefault()
    console.log(e)
    const inp = document.getElementById("na1")
        const inpValue= inp.value
    if (inpValue.trim() == '')
    {
        document.getElementById("name-error").textContent = "name is required";
        document.getElementById("name-error").style.color = "red"
    }
})

function fun3 ()
{
     const inp = document.getElementById("na1")
    const inpValue = inp.value
     if (inpValue.trim() == '')
    {
        document.getElementById("name-error").textContent = "name is required";
        document.getElementById("name-error").style.color = "red"
    }
     else
     {
         document.getElementById("name-error").textContent = "";
    }
}