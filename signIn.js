//Sign In form validation

//Declaring submit variable
const signInSubmit = document.querySelector('.sign-in-submit');

//Add event listener
signInSubmit.addEventListener('click', (e)=>{
    //preventing default behaviour
    e.preventDefault();
    //form validation
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
   
    if(email.value !== 'muhammad' || password.value !== '12345'){
        email.value = '';
        email.style.border = '2.5px solid red';
        email.placeholder = 'please input a correct username'
        password.value = '';
        password.style.border = '2.5px solid red';
        password.placeholder = 'please input a correct password'

        alert(`username : muhammad, passsword : 12345`)
      } else{
        email.style.border = '2.5px solid green';
        password.style.border = '2.5px solid green';
        setInterval(() => {
          window.location.href = 'home.html'
        }, 700); 
      }
    
})