const form = document.querySelector('#fr')
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cnfrmPwd');
const errorsDiv = document.getElementById('errors')
function add ()
{
    form.classList.toggle('hide')
}
document.getElementById('btn').addEventListener('click', add);
function submitLogic (e)
{
    e.preventDefault();
    errorsDiv.textContent = ""
    if (nameInput.value.trim() == "")
    {
					const p = document.createElement("p")
					p.textContent = "name is required"
					errorsDiv.append(p)
    }
     if (emailInput.value.trim() == "") {
				const p = document.createElement("p")
				p.textContent = "Email is required"
				errorsDiv.append(p)
    }
     if (passwordInput.value.trim() == "") {
				const p = document.createElement("p")
				p.textContent = "Password is required"
				errorsDiv.append(p)
    }
     if (confirmPasswordInput.value.trim() == "") {
				const p = document.createElement("p")
				p.textContent = "Confirm password is required"
				errorsDiv.append(p)
    }
    if(passwordInput.value.trim()!='' && passwordInput.value.length <= 8)
    {
        const p = document.createElement("p")
				p.textContent = "Password should be atleast 8 characters"
				errorsDiv.append(p)
    }
    if (passwordInput.value!='' &&confirmPasswordInput.value!=''&& passwordInput.value != confirmPasswordInput)
    {
        const p = document.createElement("p")
				p.textContent = "Password and confirm passwords are not matching"
        errorsDiv.append(p)
    }
    let emailRegex = /^[A-Za-z0-9]{2,}+@[A-Za-z]{2,}+\.[A-Za-Z]{2,}$/
    if (emailInput.value != '' && !emailRegex.test(emailInput.value))
    {
        const p = document.createElement("p")
				p.textContent = "Please enter valid email"
        errorsDiv.append(p)
    }
    let passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/
    if (passwordInput.value != '' && !passwordRegex.test(passwordInput.value))
    {
        const p = document.createElement("p")
				p.textContent = "Password should contain atleast  one uppercase, one lowecase and one digit"
				errorsDiv.append(p)
    }
}
document.getElementById('fr').addEventListener('submit', submitLogic)
document.getElementById('showPwd').addEventListener('click', function ()
{
    passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password';    
})
document.getElementById("showPwd2").addEventListener("click", function () {
	confirmPasswordInput.type = confirmPasswordInput.type == "password" ? "text" : "password"
})

