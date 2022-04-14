
const nameElement = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const buttonElement = document.getElementById('submit-btn')
const nameSmall = document.getElementById('name-small')
const emailSmall = document.getElementById('email-small')
const passSmall = document.getElementById('pass-small')
const cPassSmall = document.getElementById('cPass-small')

const entireForm = document.querySelector('form')


entireForm.addEventListener('submit', submitForm)
entireForm.addEventListener('submit', buttonClick)
// console.log(cPassSmall)
// console.log(nameSmall)
// console.log(emailSmall)
// console.log(passSmall)

function buttonClick(){
    console.log("button is clicked")
}

function submitForm(e){
    e.preventDefault()

    if(nameElement.value === "" ){
        console.log("name is Empty")
        nameElement.classList = "error"
        nameSmall.style.visibility = "visible"
    }
    if(email.value === "" ){
        console.log("email is Empty")
        email.classList = "error"
        emailSmall.style.visibility = "visible"
    }
    if(password.value === "" ){
        console.log("password is Empty")
        password.classList = "error"
        passSmall.style.visibility = "visible"
    }

    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
        cPassSmall.style.visibility = "visible"
    }

    const characters = ['@', '$', '#', "!"]

    let counter = 0
    for(let i=0; i<characters.length;i++){
        if(password.value.includes(characters[i]) === false){
            // console.log("error")
            counter++
            // console.log(characters[i], " - ", counter)
        }
    }

    if(counter === characters.length){
        console.error("Password must contain '@,$,#,!' one of these values")
    }else if(password.value === confirmPassword.value){
        console.log('password satisfies the conditions')
    }else if(password.value != confirmPassword.value){
        console.error('password and confirm password must be same')
    }

    if(password.value === confirmPassword.value){
        document.querySelector('.container').innerHTML = `
        <p> thanks for submitting</p>
        `
    }


}
