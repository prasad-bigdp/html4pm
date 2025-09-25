let c = 0;
let ele=  document.getElementById('count')
function incr ()
{
    c++;
   ele.textContent = c;   
}
function decr ()
{
    if (c > 0)
    {
        c--
				ele.textContent = c 
    }  
    else
    {
        alert("number should not be less than zero");
    }
}
function reset() {
    c = 0;
	ele.textContent = c
}