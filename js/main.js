var create_account_link = document.getElementById('create-account-link');
var sign_in_link = document.getElementById('sign-in-link');
var register_form = document.getElementById('register-form');
var login_form = document.getElementById('login-form');


function displayCreateAccount(e){
    e.preventDefault();
    

  
        register_form.className = "visible";
        login_form.className = "not-visible"
    

}

function displayLogin(e){
    e.preventDefault();
    
   

   
        register_form.className= "not-visible"
        login_form.className = "visible";
    

}

sign_in_link.addEventListener("click", displayLogin)
create_account_link.addEventListener("click",displayCreateAccount)