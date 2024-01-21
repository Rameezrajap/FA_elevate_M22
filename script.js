function validateName(){
    let nameError = document.getElementById('username-error');
    let name = document.getElementById('username');

    if(name.value.trim() ==''){
        nameError.innerHTML = 'Username cannot be blank';
        return false;
    }else if(name.value.length < 5){
        nameError.innerHTML = 'Username cannot be less than 5';
    }
    else {
        nameError.innerHTML = '';
        return true;
    }
}
function validateEmail(){
    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error');

    let regEx = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{3,5})$/)
    if(email.value.trim() =='') {
        emailError.innerHTML = 'Email cannot be blank!!'
        return false;
    }else if(!email.value.match(regEx)){
        emailError.innerHTML = "Email is not in global format"
        return false
    }else{
        emailError.innerHTML = ''
        return true
    }
}
function validatePassword(){
     let password = document.getElementById('password');
     let passwordError = document.getElementById('password-error');


     if(password.value.trim() == ''){
        passwordError.innerHTML = 'Password cannot be blank';
        return false;
    }else if(password.value.length < 6 || password.value.length>20 ) {
        passwordError.innerHTML ='Password length is weak';
        return false
     }else {
        passwordError.innerHTML = '';
        return true;
     }
}
function validateRepeat(){
     let password = document.getElementById('password');
     let repeatPassword = document.getElementById('repeatpassword');
     let repeatError = document.getElementById('repeat-error');
    
     if(password.value != repeatPassword.value){
        repeatError.innerHTML='Password mismatch';
        return false;
     }else{
        repeatError.innerHTML = '';
        return true;
     }
}
function validateForm(){
    let submitError = document.getElementById('submit-error')
    if( !validateEmail() || !validatePassword() || !validateName() || !validateRepeat()){
        submitError.innerHTML = 'Please resolve the error';
    return false;
    }
    else {
        submitError.innerHTML = '';
        return true;
    }
}
