let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let tittle = document.getElementById('tittle');
let inputName = document.getElementById('inputName'); 
let passwordField =document.getElementById('inputPassword');
let emailField =document.getElementById('inputEmail');


signinBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    tittle.innerHTML = "Sign In";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
};

signupBtn.onclick = function () {
    nameField.style.maxHeight = "65px";
    tittle.innerHTML = "Sign Up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
};

function signUpRedirect() {
    if (inputName && inputName.value.trim()) {
        alert(`Thank you, ${inputName.value}, for signing up on our platform!`);
        window.location.href = "node.html";
    } else {
        alert("Please enter your name before signing up!");
    }
}



signupBtn.addEventListener('click', signUpRedirect);
signinBtn.addEventListener('click', signInRedirect);
