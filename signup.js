//Sign up form validation
//Declaring submit variables
const submit = document.querySelector('.sign-up-submit');

//Adding an even listeners
submit.addEventListener('click', (e)=>{
    //prevent default
    e.preventDefault()
    //declaring input variables
    const firstName = document.querySelector('.first-name');
    const secondName = document.querySelector('.second-name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const passwordConfirm = document.querySelector('.password-confirm');
   //First name conditionals
   if(firstName.value === '' || firstName.value.length < 4){
       firstName.style.border = "3px solid red";
       firstName.placeholder = "please input a valid name";
       firstName.value = "";
   } else{
    firstName.style.border = "3px solid #2991cc";
   }
   //Second name conditionals
   if(secondName.value === '' || secondName.value.length < 4){
    secondName.style.border = "3px solid red";
    secondName.placeholder = "please input a valid name";
    secondName.value = "";
   } else{
    secondName.style.border = "3px solid #2991cc";
   }
   //Email conditionals
   if(email.value === '' || email.value.indexOf('@') === -1){
    email.style.border = "3px solid red";
    email.placeholder = 'please input a valid email that contains "@"';
    email.value = "";
    } else{
   email.style.border = "3px solid #2991cc";
   }
   //Password conditionals
   if(password.value === '' || password.value.length < 5){
    password.style.border = "3px solid red";
    password.placeholder = "passwords should be minimum of 5";
    password.value = "";
   } else{
    password.style.border = "3px solid #2991cc";
  }
  //Confirm password conditionals
  if(passwordConfirm.value === '' || passwordConfirm.value.length < 4){
    passwordConfirm.style.border = "3px solid red";
    passwordConfirm.placeholder = "passwords should be minimum of 5";
    passwordConfirm.value = "";
  } else{
    passwordConfirm.style.border = "3px solid #2991cc";
  }
  //Confirming password 
  if(passwordConfirm.value !== password.value){
    alert("your password didn't match")
  }
})
