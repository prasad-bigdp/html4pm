const input = document.getElementById('inp');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');
const getMovieDetails = async () =>
 {
//     fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=76923e9`)
//         .then((res) => res.json())
//         .then((data) => displayData(data.Search))
//         .catch((err) => console.log(err));
    
    try
    {
        const res = await fetch(`https://www.omdbapi.com/?s=${input.value}&apikey=76923e9`)
       
        const data = await res.json()
          
    displayData(data.Search)
    }
    catch (err)
    {
        console.log(err)
        if (data.Response == "False") {
					outputDiv.textContent = ""
					const para = document.createElement("p")
					para.textContent = "No movies Found"
					outputDiv.appendChild(para)
				}
    }


}
btn.addEventListener('click', getMovieDetails)
input.addEventListener('input',getMovieDetails)
function displayData (data)
{
    console.log(data);
    outputDiv.textContent = '';
    data.forEach((ele, ind) =>
    {
        const mDiv = document.createElement('div');
        mDiv.classList.add("p-5","rounded","rounded-3","d-flex","flex-column","gap-5","align-items-center","border","border-4","bg-white")
        const mTitle = document.createElement('h2');
        mTitle.textContent = ele.Title
        const mYear = document.createElement('p');
        mYear.textContent = ele.Year;
        const mImage = document.createElement('img');
        mImage.src = ele.Poster;
        mImage.alt = ele.Title;
        const button = document.createElement('button');
        button.textContent = "get Details"
        button.addEventListener("click", () => getDetailedInfo(ele.imdbID))
        button.classList.add("btn","btn-primary")
        mDiv.append(mImage, mTitle, mYear,button);
        outputDiv.appendChild(mDiv)
    })
}
const modalBox = document.getElementById("modalBox");
const modal = document.getElementById('modal2')
async function getDetailedInfo (id)
{
    modalBox.style.display = "block" 
    try
    {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=76923e9`);
        const data = await res.json();
        modal.textContent =""
        const mName = document.createElement('h2');
        mName.textContent = data.Title;
            const mDirector = document.createElement("p")
        mDirector.textContent = "Director: " + data.Director
        const mActors = document.createElement("p")
        mActors.textContent = "Actors: " + data.Actors
        const mPlot = document.createElement("p")
        mPlot.textContent = "Plot: " + data.Plot
        modal.append(mName,mPlot,mActors,mDirector)
    }
    catch (err)
    {
        console.log(err)
    }
    
}
document.getElementById("closeBtn").addEventListener('click', function ()
{
        modalBox.style.display = "none" 

})