// Инпуты
let userName=document.querySelector(".userName")
let lastName=document.querySelector(".lastName")
let email=document.querySelector(".email")
let password1=document.querySelectorAll(".password")[0]
let password2=document.querySelectorAll(".password")[1]

// Кнопки
let btn = document.querySelector(".btn")

btn.addEventListener("click", clickme)
// userName.addEventListener("input", inputValue)




function clickme(event){
    event.preventDefault()
    alert("я сработал")
}
// function inpurValue(){
    // console.log(userName.value)
// }

function validate(){
   if(!userNameReg.test(userName.value)){} 
}