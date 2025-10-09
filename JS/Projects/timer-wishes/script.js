// const para = document.getElementById('show')
// let c = 10;
// setTimeout(() =>
// {
//     para.textContent = "welcome Everyone"
//     timer();
// }, 1000)
// function timer ()
// {
//    let x = setInterval(() =>
//     {
//        para.textContent = c--;
//        if (c == -1)
//        {
//            para.textContent = "Wish You All the Best"
//            clearInterval(x)
//        }
//     },1000)
// }
let m = 4;
let s = 0;
const mEle = document.getElementById('m');
const sEle = document.getElementById('s');
mEle.textContent = m;
sEle.textContent = s;
s = 60;
let x = setInterval(() =>
{
    s--; 
    sEle.textContent = s;
     if (s == 0&& m == 0) {
				clearInterval(x)
			}
    if (s == 0)
    {
      
        s = 60;
        if(m!=0)
        {
              m--
            mEle.textContent = m
          }
    }
   
},20)