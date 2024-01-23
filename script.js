// Инпуты
let userName=document.querySelector(".userName")
let lastName=document.querySelector(".lastName")
let userEmail=document.querySelector(".userEmail")
let userPassword1=document.querySelectorAll(".userPassword")[0]
let userPassword2=document.querySelectorAll(".userPassword")[1]

// Кнопки
let btn = document.querySelector(".btn")

btn.addEventListener("click", clickme)
// userName.addEventListener("input", inputValue)

let userNameReg = /^[A-Za-zА-Яа-я\- ]*[^0-9][A-Za-zА-Яа-я\- ]*$/;
let userEmailReg= /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
let userPasswordReg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/



 function clickme(event){
     event.preventDefault()
    // alert("я сработал")
    validate(userNameReg,userName)
    validate(userNameReg,lastName)
    validate(userEmailReg,userEmail)
    validate(userPasswordReg,userPassword1)
    validate(userPasswordReg,userPassword2)
    // validate1()
    // validate2()
    // validate3()
    // validate4()
 }

// function inputValue(){
    // console.log(userName.value)
// }

function validate(userReg,userValue){
   if(!userReg.test(userValue.value)){
    userValue.classList.add("error")
   }else{
     if(userReg.test(userValue.value)){
        userValue.classList.remove("error")

   }
}   
}
// function validate1(){
    // if(!lastNameReg.test(lastName.value)){
    //  lastName.classList.add("error")
    // }else{
        // if(lastNameReg.test(lastName.value)){
        // lastName.classList.remove("error")
    // }
//  }   
// }

// function validate2(){
    // if(!emailReg.test(email.value)){
        // email.classList.add("error")
    // }
//  }   
// function validate3(){
    // if(!password1Reg.test(password1.value)){
        // password1.classList.add("error")
    // }
//  }   
// function validate4(){
    // if(!password2Reg.test(password2Reg.value)){
        // password2.classList.add("error")
    // }
//  }   