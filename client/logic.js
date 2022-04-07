
// const { default: axios } = require("axios");

// const { json } = require("express");

// import fetch from "fetch";
const submit = document.getElementById('sub');
var Signinemail = document.querySelector('#floatingInput');
var Signinpass = document.querySelector('#floatingPassword');
var Signinform = document.querySelector('.Logform');
var Signupform = document.querySelector('.Signupform');
var Email = document.querySelector('.email');
var Name = document.querySelector('.name');
var Username = document.querySelector('.uname');
var password = document.querySelector('.password');


// Signinform.addEventListener("submit",async(e)=>{
//     e.preventDefault();
//     const email = Signinemail.value;
//     const pass = Signinpass.value;
//     console.log(`email:${email} password:${pass}`);   
    
// })

Signupform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user = {
        name:Name.value,
        Email:Email.value,
        Username:Username.value,
        password:password.value
    }
   fetch('http://localhost:5500/api/v1/user',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(user),
        mode:'no-cors'
    }).then(response=>response).then(response=>console.log(response)).catch(error=>console.error(error));
    
              
    // window.location.replace('http://localhost:5500/index.html');
})

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    console.log("move to top");
}