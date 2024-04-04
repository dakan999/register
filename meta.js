const registerBtn = document.getElementById('register')
const conteiner = document.getElementById('container')
const loginBtn = document.getElementById('login')



registerBtn.addEventListener('click', () =>{
    conteiner.classList.add("active")
})
loginBtn.addEventListener('click', () =>{
    conteiner.classList.remove("active")
})