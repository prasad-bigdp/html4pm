let c = 10;
let timer= setInterval(function ()
{
    document.getElementById("id").textContent = --c;
}, 1000)
document.getElementById('btn3').addEventListener('click', function ()
{
    clearInterval(timer)
})
for (let i = 1; i < 10000; i++)
{
    console.log("bye")
}
console.log("john");
let timeBomb;
document.getElementById("btn").addEventListener('click', function ()
{
    timeBomb= setTimeout(() =>
    {
        document.body.textContent = ''
    }, 10000)
})
document.getElementById('btn2').addEventListener('click', function ()
{
    clearTimeout(timeBomb)
})
