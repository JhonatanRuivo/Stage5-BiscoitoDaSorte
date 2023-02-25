const screenOne = document.querySelector('.screen1')
const screenTwo = document.querySelector('.screen2')

const cookie = document.querySelector("#closedCookie") 
const reset = document.querySelector('button')

function openCookie(){
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}
cookie.addEventListener('click', openCookie)

reset.addEventListener('click', openCookie)
