//Declaring Variables
const hamburgerBar = document.querySelector('.hamburger-menu');

//Hamburger functionality
let isOpen = false
hamburgerBar.addEventListener('click', ()=>{
    if(isOpen === false){
    let menuBar = document.querySelector('.menu-bar');
    menuBar.style.opacity = '1';
    menuBar.style.left = '0%';

    const changes = document.querySelector('.fa-align-justify')
    changes.classList.remove('fa-align-justify');
    changes.classList.add('fa-times')
    changes.classList.add('hamburger-menu-times')
    
    isOpen = true;
     } else if(isOpen === true){
    let menuBar = document.querySelector('.menu-bar');
    //menuBar.style.opacity = '0';
    menuBar.style.left = '-60%';

    const changes = document.querySelector('.fa-times')
    changes.classList.remove('fa-times');
    changes.classList.add('fa-align-justify')
    changes.classList.add('hamburger-menu')
    
    isOpen = false;
   }
});

//Disabling Business button
const businessButtonDisabled = document.querySelector('.business');
function disableButton(){
    alert('This feature will be available shortly');
}

//Integrating Paystack

//Declaring Variables
const pay = document.querySelector('.pay-paystack');

/*function payHere(){
    let paystack = PaystackPop.setup({
        key: 'pk_test_80144727599bef7b6e561645e1aee63e9ce69b0b',
        email: 'muhammadsaniharuna44@gmail.com',
        amount: 100000,

    callback: function(response){
         alert(`Transaction is successful your ID is ${response}`)
        },
        onClose: function(){
         alert('heyy')
        }
      });

    paystack.openIframe();
}*/

/*function payHere(){
    let paystack = PaystackPop.setup({
        key: 'pk_test_80144727599bef7b6e561645e1aee63e9ce69b0b',
        email: 'muhammadsaniharuna44@gmail.com',
        amount: 10000,

        callback: function(response){
            alert(`Transaction is successful your ID is ${response}`)
          },
          onClose: function(){
              alert('heyy')
          }
      });

    paystack.openIframe();
}*/

function payHere(){
    const paystack = new PaystackPop();
    paystack.newTransaction({
    key: 'pk_test_80144727599bef7b6e561645e1aee63e9ce69b0b',
    email: 'muhammadsaniharuna44@gmail.com',
    amount: 10000,

    onSuccess: (transaction) => { 
        // Payment complete! Reference: transaction.reference 
        alert('okay')
      },
      onCancel: () => {
        // user closed popup
        alert('not okay')
      }
    
});
}
