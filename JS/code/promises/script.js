let x = 20000;
let p = new Promise(function (resolve, reject)
{
    if (x < 30000)
    {
        setTimeout(()=>resolve("take money"),2000)
    }
    else
    {
        reject("no money")
    }
})
console.log(p)
p
    .then((res) => console.log(res,p))
    .catch((err)=>console.log(err))