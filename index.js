const form = document.querySelector('form');
const name = document.getElementById('name-error');
const phoneNo = document.getElementById('phoneNo-error');
const email = document.getElementById('email-error');
const errormessage =document.getElementById('errorMessage');
const submitError = document.getElementById('submit-error');

function validateName(){
    const name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTMl = 'Name is required';
        return false;
    }
    if(!name.match){
        nameError.innerHTMl = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}
function validatePhoneNumber(){
    const phoneNo = document.getElementById('contact phone').value;

    if(phoneNo.length == 0){
        phoneError.innerHTML ='Phone no is required';
        return false;
    }
    if(phoneNo.length !==10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phoneNo.match(/^[0-9]/)){
        phoneError.innerHTML = 'only digits please.';
    }
}
function validateEmail(){
    const email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML ='Email is required';
        return false;
    }
    if(!email.match(/^[A-za-z])/)){
        emailError.innerHTML = 'Email Invalid'
        return false;
    }
    

}


    


